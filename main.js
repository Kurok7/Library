let myLibrary = [];

function Books(title, author, pages, haveRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.haveRead = haveRead;
  this.info = function () {
    return `${title} by ${author} has ${pages} pages and I have ${haveRead}`;
  };
}

// const book3 = new Books(
//   "The Mis-Education of the Negro",
//   "Carter G. Woodson",
//   210,
//   "read it"
// );

// let book1 = {
//     title: "In Nobis Di: Emergence",
//     author: "Juan Malone",
//     pages: "230",
//     haveRead: "not read yet",
// }

// let books = {
//   title: this.title,
//   author: this.author,
//   pages: this.pages,
//   haveRead: this.haveRead,
//   info: function () {
//     console.log(
//       `${this.title} by ${this.author} has ${this.pages} pages and I have ${this.haveRead}`
//     );
//   },
// };

// let book2 = Object.create(books);
// book2.title = "In Nobis Di";
// book2.author = "Juan Malone";
// book2.pages = 230;
// book2.haveRead = "read it";
// console.log(book2);

/*              Iterates over myLibrary
function iterateObject() {
    for (let key in myLibrary) {
        if (myLibrary.hasOwnProperty(key)) {
            value = myLibrary[key];
            console.log(key, value);
        }
    }
} */
