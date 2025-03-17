//1
// function arrayIntegersFromNToOne(nums) {
//   if (ifNumber(nums)) {
//       let arrayIntegers = [];
//       for (let i = nums; i > 0; i--) {
//           arrayIntegers.push(i);
//       }
//       return arrayIntegers;
//   }
//   console.log('Argument is not a number: ', nums);
//   return [];
// }
//console.log(arrayIntegersFromNToOne(5));

//2
// function searchUniqueNumberFromArray(arr) {
//     return arr.filter(item => arr.indexOf(item) === arr.lastIndexOf(item));
// }
// console.log(searchUniqueNumberFromArray([1, 1, 2, 1, 2]));

//3
// function toSimpleArray(arr) {
//     const simpleArr = arr.flat();
//     simpleArr.sort();
//     return simpleArr;
// }
// console.log(toSimpleArray([[3, 2, 1],[4, 6, 5],[],[9, 7, 8]]));

//4
// function add(a, b){
//     if (arguments.length !== 2) throw "Function requires exactly two arguments";
//     if (!ifNumber(a)) throw "Invalid number";
//     if (!ifNumber(b)) throw "Invalid number";
//     return a + b;
// }
// function subtract(a, b){
//     if (arguments.length !== 2) throw "Function requires exactly two arguments";
//     if (!ifNumber(a)) throw "Invalid number";
//     if (!ifNumber(b)) throw "Invalid number";
//     return a - b;
// }
// function multiply(a, b){
//     if (arguments.length !== 2) throw "Function requires exactly two arguments";
//     if (!ifNumber(a)) throw "Invalid number";
//     if (!ifNumber(b)) throw "Invalid number";
//     return a * b;
// }
// function divide(a, b){
//     if (arguments.length !== 2) throw "Function requires exactly two arguments";
//     if (!ifNumber(a)) throw "Invalid number";
//     if (!ifNumber(b)) throw "Invalid number";
//     if (a === 0) throw "Invalid number";
//     if (b === 0) throw "Invalid number";
//     return a / b;
// }
// console.log(divide(3, 0));

//5
// function analyzeNumber(num) {
//     const isPositive = num > 0;
//     const isNegative = num < 0;
//
//     function isPrime(n) {
//         if (n <= 1) return false;
//         for (let i = 2; i <= Math.sqrt(n); i++) {
//             if (n % i === 0) return false;
//         }
//         return true;
//     }
//
//     const isPrimeNum = isPrime(num);
//
//     const divisibleBy2 = num % 2 === 0;
//     const divisibleBy5 = num % 5 === 0;
//     const divisibleBy3 = num % 3 === 0;
//     const divisibleBy6 = num % 6 === 0;
//     const divisibleBy9 = num % 9 === 0;
//
//     return {
//         isPositive,
//         isNegative,
//         isPrimeNum,
//         divisibleBy2,
//         divisibleBy5,
//         divisibleBy3,
//         divisibleBy6,
//         divisibleBy9
//     };
// }
//console.log(analyzeNumber(5))

//6
// function removeDuplicateFromArray(arr) {
//     return [...new Set(arr)];
// }
// console.log(removeDuplicateFromArray([1, 1, 3, 4, 4, 1, 3, 2]));

//7
// function someName(array) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i][i] > 0) array[i][i] = 1;
//     if (array[i][i] < 0) array[i][i] = 0;
//   }
//   return array;
// }
// console.log(
//   someName([
//     [22, -1, 0, 43, 57],
//     [-33, 10, 5, 4, 8],
//     [3, -1, -44, 44, 87],
//     [4, -331, 0, 18, 4],
//     [6, -31, 9, 77, 4],
//   ]),
// );


//8
// function calculate(array){
//     const sum = array.reduce((sum, num) => sum + num, 0);
//     return sum / array.length;
// }
// console.log(calculate([1, 2, 3, 4, 5]));


//9
// function reverseArray(array){
//     for (let i = 0; i < array.length; i++) {
//         if (ifNumber(array[i])){
//             array[i] = array[i] * array[i];
//         }
//     }
//     return array.reverse();
// }
// console.log(reverseArray([1, 2, "some text", 4, 5]));


//10
// function perimeter(side, count){
//     if (!ifNumber(side)) throw "Invalid number";
//     if (!ifNumber(count)) throw "Invalid number";
//     return side * count;
// }
// console.log(perimeter(2, 3));

function ifNumber(nums) {
  return typeof nums == 'number';
}
