const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// Destucturing of the Array

const book = getBook(3);
book;
// const title = book.title;
// const author = book.author;

//The line below automatically destructure the array and save it to the
//variable only condition name should be same

const {
  title,
  author,
  translations,
  hasMovieAdaptation,
  publicationDate,
  pages,
  genres,
} = book;
pages;

console.log(title, author, genres);

// const PrimaryGenre = genres[0]
// const SecondaryGenre = genres[1]

//Rest
// below will take element priority wise and assign to variable  accordingly
// If we just want to and remaning into different array that can be done like below and array variable should be last

const [PrimaryGenre, SecondaryGenre, ...otherGenres] = genres;
console.log("Hasrshl");
console.log(PrimaryGenre, SecondaryGenre, otherGenres);

// Spread operator
// ... in the array will the destructe the array and new will be added into same array

const newGeneres = [...genres, "epic fanstansy"];
newGeneres;

const updateBook = {
  ...book,

  // Adding a new property
  moviePublicationDate: "2023-10-12",

  // Overwriting the existing one
  pages: 1500,
};
updateBook;

// Template Literals
// This is used for subsituting javascript variable in a string by ``

// Arrow function used for oneliner
// parameter => statement to be returned

// function getYear(str) {
//   return str.split("-")[0];
// }

const getYear = (str) => str.split("-")[0];
console.log(getYear(publicationDate));

const summary = `${title}, a ${pages}-page long book, was written by ${author} and published in ${getYear(
  publicationDate
)}. The Book has ${hasMovieAdaptation ? "" : "not"} been adapted as a Movie.`;
summary;

// Ternary Literals
// condition ? "value if condtion is satisfied" : "value of else"
const pageRange = pages > 1000 ? "greater than thousand" : "less than thousand";
pageRange;

// Short-Circuting and Logical Operator : && || ??

console.log(true && "Some String");
console.log(false && "Some String");
console.log(hasMovieAdaptation && "This book has a movie");

// falsy value : 0, '', null, undefined
console.log("jonas" && "Some string");
console.log(0 && "Some String");

console.log(true || "Some String");
console.log(0 || "Some String");

console.log(book.translations.spanish);
const spanishTranslation = book.translations.spanish || "NOT TRANSLATED";
spanishTranslation;

// // This below function or || is going wrong as value is only 0 so in that case its failing
// console.log(book.reviews.librarything.reviewsCount);
// const countWrong = book.reviews.librarything.reviewsCount || "no data";
// countWrong;

// ?? it like || operator it will check if the first part of the string is falsy then it will return and not the default value
// const count = book.reviews.librarything.reviewsCount ?? "no data";
// count;

// optional chaining
// This is used when class variable is not defined in that case we can directly ?. if its exit then only call the children
function getTotalReviewCount(book) {
  const goodreads = book.reviews.goodreads.reviewsCount;
  const librarything = book?.reviews?.librarything?.reviewsCount ?? 0;
  return goodreads + librarything;
}

console.log(getTotalReviewCount(book));
