
  
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
    const {
        id: accountId
    } = account;
    return books.reduce((total, book) => {
      return (
            total +
            book.borrows
            .filter(borrow => borrow.id === accountId)
            .reduce((totalBorrows, borrow) => totalBorrows + 1, 0)
        )}, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  const borrowedBooks = [];

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
