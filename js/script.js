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

// incr++;
// decr--;

// console.log(++incr);
// console.log(--decr);

// console.log(5 % 2);

// console.log(2 + 2 * 2 !== '6');

// &&
// ||

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
//         break;
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

// console.log(logg.slice(6));

// console.log(logg.substring(6, 11));

// console.log(logg.substr(6, 5));

// const num = 12.2;
// console.log(Math.round(num));

// const test = "12.2px";
// console.log(parseInt(test));
// console.log(parseFloat(test));

// Lesson 018

// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

//     while (numberOfFilms == '' || numberOfFilms == null ||
//         isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
// }

// const personaMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false

// };

// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         let a = prompt('Один из последних просмотренных фильмов?', ''),
//             b = prompt('На сколько оцените его?', '');
//         if (a != null && a != '' && a.length < 50 &&
//             b != null && b != '' && b.length < 50) {
//             personaMovieDB.movies[a] = b;
//         } else {
//             alert("Ошибка");
//             i--;
//         }
//     }
// }

// rememberMyFilms();

// function detectPersonalLevel() {
//     if (personaMovieDB.count < 10) {
//         alert("Просмотрено довольно мало фильмов");
//     } else if (personaMovieDB.count >= 10 && personaMovieDB.count < 30) {
//         alert("Вы классический зритель");
//     } else if (personaMovieDB.count >= 30) {
//         alert("Вы киноман");
//     } else {
//         alert("Произошла ошибка");
//     }
// }

// detectPersonalLevel();

// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personaMovieDB);
//     }
// }

// function writeYourGenres() {
//     for (let i = 1; i < 4; i++) {
//         personaMovieDB.genres[i - 1] =
//             prompt(`Ваш любимый жанр под номером ${i}?`);
//     }

// }

// writeYourGenres();

// showMyDB(personaMovieDB.privat);

// console.log(personaMovieDB);

// Lesson 019

// function first() {
//     Do somethings
//     setTimeout(function () {
//         console.log(1);
//     }, 500);
// }

// function second() {
//     console.log(2);
// }

// first();
// second();

// function learnJS(lang, callback) {
//     console.log(`Я учу: ${lang} `);
//     callback();
// }

// function done() {
//     console.log('Я прошел этот урок!');
// }

// learnJS('JavaScript', done);

// Lesson 020

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         background: 'red'
//     },
//     makeTest: function () {
//         console.log("Test");
//     }
// };

// options.makeTest();

// const {
//     border,
//     background
// } = options.colors;
// console.log(border);

// console.log(Object.keys(options).length);

// console.log(options["colors"]["border"]);

// console.log(options.name);

// delete options.name;

// console.log(options);

// let counter = 0;
// for (let key in options) {
//     if (typeof (options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
// }
// console.log(counter);

// Lesson 021

// const arr = [2, 12, 26, 8, 10];
// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b) {
//     return a - b;
// }
// arr.forEach(function (item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// arr[99] = 0;

// console.log(arr.length);

// arr.pop();

// arr.push(10);

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join('; '));

// Lesson 022

// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj; // Ссылка

// copy.a = 10;

// console.log(copy);
// console.log(obj);

// function copy(mainObj) {
//     let objCopy = {};

//     for (let key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }

//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;
// newNumbers.c.x = 10;

// console.log(newNumbers);
// console.log(numbers);

// const add = {
//     d: 17,
//     e: 20
// };

// const clone = Object.assign({}, add);

// clone.d = 20;

// console.log(add);
// console.log(clone);

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();

// newArray[1] = 'ddddddd';
// console.log(newArray);
// console.log(oldArray);

// const video = ['youtube', 'vimeo', 'rutube'],
//     blogs = ['wordpress', 'livejournal', 'blogger'],
//     internet = [...video, ...blogs, 'vk', 'facebook'];

// console.log(internet);

// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num = [2, 5, 7];

// log(...num);

// console.log(...num);

// const array = ["a", "b"];

// const newAarray = [...array];

// const q = {
//     one: 1,
//     two: 2
// }

// const newObj = {
//     ...q
// };

// Lesson 023

// let str = "some";
// let strObj = new String(str);

// console.log(typeof (str));
// console.log(typeof (strObj));

// console.dir([1, 2, 3]);

// const solider = {
//     health: 400,
//     armor: 100,
//     sayHello: function () {
//         console.log("Hello");
//     }
// };

// const john = Object.create(solider);

// const john = {
//     health: 100
// };

// john.__proto__ = solider;

// Object.setPrototypeOf(john, solider);
// john.sayHello();

// Lesson 024

// const personaMovieDB = {
//     count: 0,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
//     start: function () {
//         personaMovieDB.count = +prompt
// ('Сколько фильмов вы уже посмотрели?', '');

//         while (personaMovieDB.count == '' || personaMovieDB.count == null ||
//             isNaN(personaMovieDB.count)) {
//             personaMovieDB.count = +prompt
// ('Сколько фильмов вы уже посмотрели?', '');
//         }
//     },
//     rememberMyFilms: function () {
//         for (let i = 0; i < 2; i++) {
//             let a = prompt('Один из последних просмотренных фильмов?', ''),
//                 b = prompt('На сколько оцените его?', '');
//             if (a != null && a != '' && a.length < 50 &&
//                 b != null && b != '' && b.length < 50) {
//                 personaMovieDB.movies[a] = b;
//             } else {
//                 alert("Ошибка");
//                 i--;
//             }
//         }
//     },
//     detectPersonalLevel: function () {
//         if (personaMovieDB.count < 10) {
//             alert("Просмотрено довольно мало фильмов");
//         } else if (personaMovieDB.count >= 10 && personaMovieDB.count < 30) {
//             alert("Вы классический зритель");
//         } else if (personaMovieDB.count >= 30) {
//             alert("Вы киноман");
//         } else {
//             alert("Произошла ошибка");
//         }
//     },
//     showMyDB: function (hidden) {
//         if (!hidden) {
//             console.log(personaMovieDB);
//         }
//     },
//     toggleVisibleMyDB: function () {
//         if (personaMovieDB.privat) {
//             personaMovieDB.privat = false;
//         } else {
//             personaMovieDB.privat = true;
//         }
//     },
//     writeYourGenres: function () {
//         for (let i = 1; i < 4; i++) {
//             let favoriteGenre = prompt(`Ваш любимый жанр под номером ${i}?`);
//             if (favoriteGenre == null || favoriteGenre == '') {
//                 alert("Напишите жанр, пожалуйста.");
//                 i--;
//             } else {
//                 personaMovieDB.genres[i - 1] = favoriteGenre;
//             }
//         }
//         personaMovieDB.genres.forEach((item, i) => {
//             alert(`Любимый жанр ${i + 1} - это ${item}`);
//         });
//     }
// };

// personaMovieDB.writeYourGenres();

// console.log(personaMovieDB);

// Lesson 026

// 1
// console.log(typeof (String(null)));
// console.log(typeof (String(4)));

// 2
// console.log(typeof (5 + ''));

// const num = 5;

// console.log("htttps://vk.com/catalog/" + num);

// const fontSize = 26 + 'px';

// 1
// console.log(typeof (Number('4')));

// 2
// console.log(typeof (+'5'));

// 3
// console.log(typeof (parseInt("15px", 10)));

// let answ = +prompt("Hello", "");

// 1

// 0, '', null, undefined, NaN;

// let switcher = null;

// if (switcher) {
//     console.log('Working...');
// }

// switcher = 1;

// if (switcher) {
//     console.log('Working...');
// }

// 2
// console.log(typeof (Boolean('4')));

// 3
// console.log(typeof (!!"ssss"));

// Lesson 027

// let x = 5;
// alert(x++); = 5

//     [] + false - null + true; = NaN

// let y = 1;
// let x = y = 2;
// alert(x); = 2

//     [] + 1 + 2; = "12"

// alert("1" [0]); = "1"

// 2 && 1 && null && 0 && undefined; = null

//     !!(a && b) и(a && b); = false

// alert(null || 2 && 3 || 4); = 3

// a = [1, 2, 3];
// b = [1, 2, 3]; = false

// alert(+"Infinity"); = Infinity

//     "Ёжик" > "яблоко"; = false

// 0 || "" || 2 || undefined || true || falsе; = 2

// Lesson 028

// const box = document.getElementById('box');

// console.log(box);

// const btns = document.getElementsByTagName('button');

// console.log(btns[0]);

// const circles = document.getElementsByClassName('circle');

// console.log(circles);

// const hearts = document.querySelectorAll();

// hearts.forEach(item => {
//     console.log(item)
// });

// const oneHeart = document.querySelector('.heart');
// console.log(oneHeart);

// Lesson 029

// const box = document.getElementById('box'),
//     btns = document.getElementsByTagName('button'),
//     circles = document.getElementsByClassName('circle'),
//     hearts = document.querySelectorAll('.heart'),
//     oneHeart = document.querySelector('.heart'),
//     wrapper = document.querySelector('.wrapper');

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

// box.style.cssText = `background-color: blue; width: 500px`;

// btns[1].style.borderRadius = '100%';
// circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

// hearts.forEach(item => {
//     item.style.backgroundColor = 'blue';
// });

// const div = document.createElement('div');
// const text = document.createTextNode('Тут был я');

// div.classList.add('black');

// document.body.append(div);

// wrapper.append(div);
// wrapper.appendChild(div);

// wrapper.prepend(div);

// hearts[0].before(div);

// hearts[0].after(div);

// wrapper.insertBefore(div, hearts[1]);

// circles[0].remove();
// wrapper.removeChild(hearts[1]);

// hearts[0].replaceWith(circles[0]);
// wrapper.replaceChild(circles[0], hearts[0]);

// div.innerHTML = "<h1>Hellow World</h1>";

// div.textContent = "Hello";

// div.insertAdjacentHTML("", '<h2>Hello</h2>');

// Lesson 031

// const btns = document.querySelectorAll('button'),
//     overlay = document.querySelector('.overlay');
// btn.onclick = function () {
//     alert('Click');
// };

// btn.onclick = function () {
//     alert('Second click');
// };

// let i = 0;
// const deleteElement = (e) => {
//     console.log(e.target);
//     console.log(e.type);
//     i++;
//     if (i == 1) {
//         btn.removeEventListener('click', deleteElement);
//     }
// };

// btns.forEach(btn => {
//     btn.addEventListener('click', deleteElement, {once: true});
// });

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

// const link = document.querySelector('a');

// link.addEventListener('click', function (event) {
//     event.preventDefault();

//     console.log(event.target);
// });

// Lesson 032

// console.log(document.head);
// console.log(document.documentElement);
// console.log(document.body.childNodes);
// console.log(document.body.firstChild);
// console.log(document.body.firstElementChild);
// console.log(document.body.lastChild);
// console.log(document.body.lastElementChild);

// console.log(document.querySelector('#current').parentNode.parentNode);
// console.log(document.querySelector('#current').parentElement);

// console.log(document.querySelector('[data-current="3"]').nextElementSibling);

// for (let node of document.body.childNodes) {
//     if (node.nodeName == '#text') {
//         continue;
//     }

//     console.log(node);

// }

// Lesson 034

// window.addEventListener('DOMContentLoaded', () => {
//     const box = document.querySelector('.box');

//     box.addEventListener('touchstart', (e) => {
//         e.preventDefault();

//         console.log('Start');
//         console.log(e.touches);
//     });

//     box.addEventListener('touchmove', (e) => {
//         e.preventDefault();

//         console.log(e.targetTouches[0].pageX);
//     });

//     box.addEventListener('touchend', (e) => {
//         e.preventDefault();

//         console.log('End');
//     });
// });

// touches
// targetTouches
// changedTouches

// Lesson 035

// const p = document.querySelectorAll('p');
// console.log(p);

// function loadScript(src) {
//     const script = document.createElement('script');
//     script.src = src;
//     script.async = false;
//     document.body.append(script);
// }

// loadScript("js/test.js");
// loadScript("js/some.js");

// Lesson 037

// const btns = document.querySelectorAll('button'),
//     wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(1));
// console.log(btns[1].classList.add('red'));
// console.log(btns[0].classList.remove('blue'));
// console.log(btns[0].classList.toggle('blue'));

// if (btns[1].classList.contains('red')) {
//     console.log('red');
// }

// btns[0].addEventListener('click', () => {
// if (!btns[1].classList.contains('red')) {
//     btns[1].classList.add('red');
// } else {
//     btns[1].classList.remove('red');
// }

//     btns[1].classList.toggle('red');
// });

// console.log(btns[0].className);

// wrapper.addEventListener('click', (event) => {
//     if (event.target && event.target.matches("button.red")) {
//         console.log('Hello');
//     }
// });

// btns.forEach(btn => {
//     btn.addEventListener('click', () => {
//         console.log('Hello');
//     });
// });

// const btn = document.createElement('button');
// btn.classList.add('red');
// wrapper.append(btn);

// Lesson 040

// const now = new Date('2020-05-01');
// new Date.parse('2020-05-01'); 

// console.log(now.setHours(40));
// console.log(now);

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getUTCHours());

// console.log(now.getTimezoneOffset());
// console.log(now.getTime());

// let start = new Date();

// for (let i = 0; i < 100000; i++){
//     let some = i ** 3;
// }

// let end = new Date();

// alert(`Цикл отработал за ${end - start} миллисикунд`);

// Lesson 042

// const box = document.querySelector('.box'),
//     btn = document.querySelector('button');

// const width = box.clientWidth;
// const height = box.clientHeight;

// const width = box.offsetWidth;
// const height = box.offsetHeight;

// const width = box.scrollWidth;
// const height = box.scrollHeight;

// console.log(width, height);

// btn.addEventListener('click', () => {
//     box.style.height = box.scrollHeight + 'px';
//     console.log(box.scrollTop);
// });

// console.log(box.getBoundingClientRect().top);

// const style = window.getComputedStyle(box);

// console.log(style.display);

// console.log(document.documentElement.scrollTop);

// Lesson 045

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function () {
//         console.log(`Hello ${this.name}`);
//     };
// }

// User.prototype.exit = function (name) {
//     console.log(`Пользователь ${this.name} ушел`);
// };

// const ivan = new User('Ivan', 28);
// const alex = new User('Alex', 20);

// ivan.exit();

// ivan.hello();
// alex.hello();

// console.log(ivan);
// console.log(alex);

// Lesson 046