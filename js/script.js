// Lesson 006

// const obj = {
//     name: "John",
//     age: 25,
//     isMarried: false
// };

// console.log(obj.name);

// let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {},
//     []
// ];
// console.log(arr[2]);

// Lesson 007

// alert('Hello');

// const result = confirm("Are you here?");
// console.log(result);

// const answer = +prompt("Вам есть 18?", "18");
// console.log(answer + 5);

// const answers = [];

// answers[0] = prompt('Как ваше имя?', '');
// answers[1] = prompt('Как ваша фамалия?', '');
// answers[2] = prompt('Сколько вам лет?', '');

// console.log(typeof (answers));
// console.log(typeof (null));

// Lesson 008

// const category = 'toys';

// console.log(`https://someurl.com/${category}/5`);

// const user = "Ivan";

// alert(`Привет, ${user}`);

// Lesson 009

// console.log('arr' + " - object");
// console.log(4 + "5");

// let incr = 10,
//     decr = 10;

// // incr++;
// // decr--;

// console.log(++incr);
// console.log(--decr);

// console.log(5 % 2);

// console.log(2 + 2 * 2 !== '6');

// // &&
// // ||

// const isChecked = false,
//     isClose = false;

// console.log(isChecked || !isClose);

// Lesson 012

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personaMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false

// };

// const lastFilmA = prompt('Один из последних просмотренных фильмов?', ''),
//     scoreFilmA = prompt('На сколько оцените его?', ''),
//     lastFilmB = prompt('Один из последних просмотренных фильмов?', ''),
//     scoreFilmB = prompt('На сколько оцените его?', '');

// personaMovieDB.movies[lastFilmA] = scoreFilmA;
// personaMovieDB.movies[lastFilmB] = scoreFilmB;

// console.log(personaMovieDB);

// Lesson 013

// if (4 == 9) {
//     console.log('Ok!');
// } else {
//     console.log('Error');
// }


// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Много');
// } else {
//     console.log('Ok!');
// }

// (num == 50) ? console.log('Ok!'): console.log('Error');

// const num = 50;

// switch (num) {
//     case 49:
//         console.log('Неверно');
//         break;
//     case 100:
//         console.log('Неверно');
//         break;
//     default:
//         console.log('Не в этот раз');
//         break;
// }

// Lesson 014

// let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

// for (let i = 1; i < 8; i++) {
//     if (i === 6) {
//         // break;
//         continue;
//     }
//     console.log(i);
// }

// Lesson 015

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personaMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false

// };

// for (let i = 0; i < 2; i++) {
//     let a = prompt('Один из последних просмотренных фильмов?', ''),
//         b = prompt('На сколько оцените его?', '');
//     if (a != null && a != '' && a.length < 50 &&
//         b != null && b != '' && b.length < 50) {
//         personaMovieDB.movies[a] = b;
//     } else {
//         alert("Ошибка");
//         i--;
//     }
// }

// if (personaMovieDB.count < 10) {
//     alert("Просмотрено довольно мало фильмов");
// } else if (personaMovieDB.count >= 10 && personaMovieDB.count < 30) {
//     alert("Вы классический зритель");
// } else if (personaMovieDB.count >= 30) {
//     alert("Вы киноман");
// } else {
//     alert("Произошла ошибка");
// }
// console.log(personaMovieDB);

// Lesson 016

// let num = 20;

// function ShowFirstMessage(text) {
//     console.log(text);
//     console.log(num);
// }

// ShowFirstMessage("Hello World!");
// console.log(num);

// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(1, 4));
// console.log(calc(14, 44));
// console.log(calc(13, 43));

// function ret() {
//     let num = 50;
//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);

// const logger = function () {
//     console.log("Hello");
// };

// logger();

// const calc = (a, b) => {
//     console.log('1');
//     return a + b;
// };

// Lesson 017

// const str = "test";

// console.log(str.length);

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str);

// let fruit = "Some fruit";

// console.log(fruit.indexOf("fruit"));

// const logg = "Hellow world";

// console.log(logg.slice(6 ));

// console.log(logg.substring(6, 11));

// console.log(logg.substr(6, 5));

// const num = 12.2;
// console.log(Math.round(num));

// const test = "12.2px";
// console.log(parseInt(test));
// console.log(parseFloat(test));

// Lesson 018

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

const personaMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');
        if (a != null && a != '' && a.length < 50 &&
            b != null && b != '' && b.length < 50) {
            personaMovieDB.movies[a] = b;
        } else {
            alert("Ошибка");
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personaMovieDB.count < 10) {
        alert("Просмотрено довольно мало фильмов");
    } else if (personaMovieDB.count >= 10 && personaMovieDB.count < 30) {
        alert("Вы классический зритель");
    } else if (personaMovieDB.count >= 30) {
        alert("Вы киноман");
    } else {
        alert("Произошла ошибка");
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personaMovieDB);
    }
}

function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
        personaMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}?`);
    }

}

writeYourGenres();

showMyDB(personaMovieDB.privat);

console.log(personaMovieDB);