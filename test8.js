// const Book = {
//   title: "The Hobbit",
//   author: "Juan P Chica",
//   year: 2021,
//   showInfo: function () {
//     return "works " + this.title;
//   },
// };

// Book.title; //=
// Book.showInfo(); //=

function Book(title, year, author) {
  this.title = title;
  this.year = year;
  this.author = author;
  this.showInfo = function () {
    return `${this.title} + ${this.author}`;
  };
}

const book1 = new Book("The Hobbit", 2015, "Juan Pablo Chica");
book1.showInfo(); //=

const book2 = new Book("The Lord Of the Rings", 2015, "Nico Chica");
book2.showInfo(); //=
