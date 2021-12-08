
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// let getMin = (a, b, c) => {
//     if (a < b && a < c) {
//         document.write(a);
//     } else if (b < c && b < a) {
//         document.write(b);
//     } else {
//         document.write(c);
//     }
// }
//
// getMin(10, 25, 14);


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// let getMax = (a1, b1, c1) => {
//     if (a1 > b1 && a1 > c1) {
//         document.write(a1);
//     } else if (b1 > a1 && b1 > c1) {
//         document.write(b1);
//     } else {
//         document.write(c);
//     }
// }
//
// getMax(1145, 45, 669);


// - створити функцію яка повертає найбільше число з масиву
let nums = [2252, 4545, 885, 663, 88755, 302, -150, 665, 58, 11457];
// let getMaxFromArray = (array) => {
//     let max = array[0];
//     for (const max1 of array) {
//         if (max1 > max) {
//             max = max1;
//         }
//     }
//     return max;
// }
//


// - створити функцію яка повертає найменьше число з масиву
// document.write(getMaxFromArray(nums));
// let getMinFromArray = (array) => {
//     let min = array[0];
//     for (const arrayElement of array) {
//         if (arrayElement < min) {
//             min = arrayElement;
//         }
//     }
//     return min;
// }
//
// document.write(getMinFromArray(nums));


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let getSummary = (array) => {
//     let summary = 0;
//     for (const arrayElement of array) {
//         summary = arrayElement + summary;
//     }
//     return summary;
// }
//
// document.write(getSummary(nums));


// // - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let getAverage = (array) => {
//     let avr = 0;
//     for (const arrayElement of array) {
//         avr = arrayElement + avr / array.length;
//     }
//     return avr;
// }
//
// document.write(getAverage(nums));


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// let getReturnMinPrintMax = (array) => {
//     let max = nums[0];
//     let min = nums[0];
//     for (let num of nums) {
//         if (num > max) {
//             max = num;
//         }
//         if (num < min) {
//             min = num;
//         }
//     }
//     console.log(max);
//     return min;
// }
//
//
// document.write(getReturnMinPrintMax(nums));


// - створити функцію яка заповнює масив рандомними числами
// let fillRandom = (length) => {
//     let arr = [];
//     for (let i = 0; i < length; i++) {
//         const arrElement = arr[i];
//         arr[i] = Math.round(Math.random()*200);
//     }
//     return arr;
// }
//
// document.write(fillRandom(15));


// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// let fillRandomLimit = (length, limit) => {
//     let arr = [];
//     for (let i = 0; i < length; i++) {
//         arr[i] = Math.round(Math.random() * limit);
//     }
//     return arr;
// }
//
// document.write(fillRandomLimit(20, 100));


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let getReverse = (array) => {
//     let arr = [];
//     for (let i = array.length - 1, ri = 0; i >= 0; i--, ri++) {
//         arr[ri] = array[i];
//     }
//     return arr;
// }
//
// console.log(getReverse(nums));
