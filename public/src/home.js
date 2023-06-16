function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}
function getBooksBorrowedCount(books) {
  let borrowedBooks = 0;
  
  books.forEach(book => {
    if (!book.borrows[0].returned) borrowedBooks++;
  });
  return borrowedBooks;
}

function getMostCommonGenres(books) {
    const genresOfBooks = books.map((book) => book.genre);
    const fiveCommonGenres = [];
  genresOfBooks.map((genre) => {
      const location = fiveCommonGenres.findIndex((element) => element.name === genre);
      if (location >= 0) {
        fiveCommonGenres[location].count = fiveCommonGenres[location].count + 1;
      } else {
        fiveCommonGenres.push({ name: genre, count: 1 });
      }
    });
    fiveCommonGenres.sort((a, b) => b.count - a.count);
    if (fiveCommonGenres.length > 5) {
      return fiveCommonGenres.slice(0, 5);
    }
  return fiveCommonGenres;
}


function getMostPopularBooks(books) {
  // create an new array of most popular books with map
  const result = books.map((book) => {
    const popularityInfo = {
      name: book.title,
      count: book.borrows.length,
    };

    return popularityInfo;
  });
  result.sort((titleA, titleB) => titleB.count - titleA.count);

  // limit to 5 elements
  result.splice(5);

  return result;
}
function getMostPopularAuthors(books, authors) {
 let result = [];
 authors.forEach((author) => {
  let theAuthor = {
   name: `${author.name.first} ${author.name.last}`,
   count: 0
  };
  books.forEach((book) => {
   if (book.authorId === author.id) {
    theAuthor.count += book.borrows.length;
   }
  });
  result.push(theAuthor);
 });
 return result.sort((a, b) => b.count - a.count).slice(0, 5);
}


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
