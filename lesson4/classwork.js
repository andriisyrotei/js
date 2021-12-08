// - створити функцію яка приймає три числа та виводить найменьше.
// function showMinNum (num1, num2, num3) {
//     if (num1 < num2 && num1 < num3) {
//         console.log(num1);
//     } else if (num2 < num1 && num2 < num3) {
//         console.log(num2);
//     } else {
//         console.log(num3);
//     }
//
// }
//
// showMinNum(11, 35, 21);


// - створити функцію яка приймає три числа та виводить найбільше.
// function showMaxNum (num1, num2, num3) {
//     if (num1 > num2 && num1 > num3) {
//         document.write(num1);
//     } else if (num2 > num1 && num2 > num3) {
//         document.write(num2);
//     } else {
//         document.write(num3);
//     }
// }
//
// showMaxNum(36, 548, 65);


// - створити функцію яка повертає найбільше число з масиву
// let arrayNums = [36, 258, 45, 8869, 2015858, 10, 65, 30];
// function maxNumFromArray(array) {
//     let max = arrayNums[0];
//     for (const number of arrayNums) {
//         if (number > max) {
//         max = number;
//         }
//     }
//     return max;
// }
// document.write(maxNumFromArray(arrayNums));


// - створити функцію яка повертає найменьше число з масиву
// let minArray = [12, 45, 5598, 5454, 1, 23, -18];
// function minNumFromArray (array) {
//     let min = array[0];
//     for (const arrayElement of array) {
//         if (arrayElement < min) {
//             min = arrayElement
//         }
//     }
//     return min;
// }
//
// document.write(minNumFromArray(minArray));


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його
// let arrayNumbers = [14, 55, 689, 558, 996, 201];
// function sumArrayNumbers (array) {
//     let res = 0;
//     for (const arrayElement of array) {
//         res = arrayElement + res;
//     }
//     return res;
// }
// document.write(sumArrayNumbers(arrayNumbers));


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let avgArray = [22, 25, 366, 68, 545, 77];
// function sumAvgArray (array) {
//     let avg = 0;
//     for (const arrayElement of array) {
//         avg = arrayElement / array.length;
//     }
//     return avg;
// }
//
// document.write(sumAvgArray(avgArray));


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// function minMaxArr (nums) {
//     let max = arguments[0];
//     let min = arguments[0];
//     for (const num of arguments) {
//         if (num > max) {
//             max = num;
//         }
//         if (num < min) {
//             min = num;
//         }
//     }
//     console.log(min);
//     return max;
// }
//
// document.write(minMaxArr(100, 35, 16, 58, 665));


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// function fillArr (arrLength, limit) {
//     let arr = [];
//     for (let i = 0; i < arrLength; i++) {
//         arr[i] = Math.round(Math.random() * limit);
//     }
//     return arr;
// }
// document.write(fillArr(15, 325));


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let nums = [1, 2, 3];
// function getReverse (array) {
//     let arr = [];
//     for (let i = array.length - 1, ri = 0; i >= 0; i--, ri++) {
//         arr[ri] = array[i];
//     }
//     return arr;
// }
// console.log(getReverse(nums));


