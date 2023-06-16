
  
function findAccountById(accounts, id) {
 const result = accounts.find(account =>account.id===id)
 return result;
}

function sortAccountsByLastName(accounts) {
  //use let instead of const becuase the sort will mutate my array, not create a new one. 
  let result = accounts.sort((accountA, accountB)=>
accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1 )
  return result;
}

function getTotalNumberOfBorrows(account, books) {
  let total = 0;
  const { id } = account;

  for (let book in books) {
    const { borrows } = books[book];
    borrows.forEach((element) => {
      if (element.id === id) {
        total++;
      }
    });
  }
  return total;
}

function getBooksPossessedByAccount(account, books, authors) {
  const borrowedBooks = [];
  books.forEach((book) => {
    let bookBorrows = book.borrows;
    bookBorrows.forEach((borrow) => {
      if (borrow.id === account.id && !borrow.returned) {
        borrowedBooks.push(book);
      }
    });
  });
  let result = borrowedBooks.map((book) => {
    return { ...book, author: getAuthor(book, authors) };
  });
  return result;
}
// Helper function
// Returns author 
function getAuthor(book, authors) {
  const author = authors.find((author) => author.id === book.authorId);
  return author;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
