//1
// let day;
// const weekDaysInEnglish = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
// const weekDaysInUkrainian = ['понеділок', 'вівторок', 'середа', 'четвер', 'п’ятниця', 'субота', 'неділя'];
// function askLanguage() {
//     let language;
//     while (true) {
//         language = prompt('Виберіть мову: "ua" або "en"')?.trim().toLowerCase();
//         if (language === 'ua' || language === 'en') return language;
//         alert('Неправильний ввід. Спробуйте ще раз.');
//     }
// }
// function getWeekDayUA() {
//     while (true) {
//         day = +prompt('Введіть номер дня неділі від 1 до 7')
//         if (day >= 1 && day <= 7) return day;
//         alert('Неправильний ввід. Спробуйте ще раз.');
//     }
// }
// function getWeekDayEN() {
//     while (true) {
//         day = +prompt('Enter the day number of the week from 1 to 7')
//         if (day >= 1 && day <= 7) return day;
//         alert('Invalid input. Try again.');
//     }
// }
//
// let language = askLanguage();
// if (language === 'en') {
//     getWeekDayEN();
//     alert(weekDaysInEnglish[day - 1]);
// } else if (language === 'ua') {
//     getWeekDayUA();
//     alert(weekDaysInUkrainian[day - 1]);
// }


//2
// function Chessboard(width, height) {
//     if (typeof width !== 'number' || typeof height !== 'number') {
//         throw new Error('Both arguments must be numbers');
//     }
//     this.width = width;
//     this.height = height;
// }
//
// Chessboard.prototype.create = function() {
//     let board = "";
//     for (let i = 0; i < this.height; i++) {
//         let row = "";
//         for (let j = 0; j < this.width; j++) {
//             row += (i + j) % 2 === 0 ? "#" : "@";
//         }
//         board += row + "\n";
//     }
//     console.log(board);
// };
//
// const chessboard = new Chessboard(8, 8);
// chessboard.create();


//3
// class Random {
//   constructor(low, high, element) {
//     if (typeof high !== 'number' || typeof low !== 'number') {
//       throw new Error('Both arguments must be numbers');
//     }
//     if (element && !Array.isArray(element)) {
//       throw new Error('Element must be an array');
//     }
//     this.low = low;
//     this.high = high;
//     this.element = element;
//   }
//
//   static nextDouble(low, high) {
//     return Math.random() * (high - low) + low;
//   }
//
//   static nextInt(low, high) {
//     return Math.floor(Math.random() * (high - low + 1)) + low;
//   }
//
//   static nextElement(element) {
//     return element[Math.floor(Math.random() * element.length)];
//   }
// }
//
// console.log(Random.nextDouble(2,10));
// console.log(Random.nextInt(2,10));
// console.log(Random.nextElement([2,10,1,5,7,8,3]));


//4
// function Greetable() {}
//
// Greetable.prototype.greet = function(greeting) {
//     return `${greeting}, ${this.value}!`;
// }
//
// function createGreetable(str) {
//     const result = Object.create(Greetable.prototype);
//     result.value = str;
//     return result;
// }
//
// const g = createGreetable('Oleg');
// console.log(g.greet('Hello'));


//5
// function sequence(start, step){
//     let currentNumber = start - step;
//     return function () {
//         return currentNumber += step;
//     }
// }
//
// let generator = sequence(10, 3);
// let generator2 = sequence(7, 1);
//
// console.log(generator()); //10
// console.log(generator()); //13
// console.log(generator2()); //7
// console.log(generator()); //16
// console.log(generator2()); //8


//6
// function pluck(array, key){
//     return array.map(item => item[key]);
// }
//
// let characters = [
//     {name: "barney", age: 36},
//     {name: "fred", age: 40}
// ];
// console.log(pluck(characters, "name"));
// console.log(pluck(characters, "age"));

