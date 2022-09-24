let myLibrary = [];

function Books(title, author, pages, haveRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.haveRead = haveRead
    this.info = function() {
        return `${title} by ${author} has ${pages} and I think i might have read it (${haveRead})`
    }
}

const book1 = new Books('1984', 'George Orwell', 200, false);
const book2 = new Books('Discrimination and Disparities', 'Thomas Sowell', 280, true);
const book3 = new Books('The Mis-Education of the Negro', 'Carter G. Woodson', 210, true);

/*              Iterates over myLibrary
function iterateObject() {
    for (let key in myLibrary) {
        if (myLibrary.hasOwnProperty(key)) {
            value = myLibrary[key];
            console.log(key, value);
        }
    }
} */