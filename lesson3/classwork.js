// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:

let numbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];


// 1. перебрати його циклом while
// let i = 0;
// while (i < numbers.length) {
//     console.log(numbers[i]);
//     i++;
// }


// 2. перебрати його циклом for
// for (i = 0; i < numbers.length; i++) {
//     const numbersItem = numbers[i];
//     console.log(numbersItem);
// }


// for (i = numbers.length - 1; i >= 0; i--) {
//     let number = numbers[i];
//     console.log(number);
// }


//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let i = 0;
// while (i < numbers.length) {
//     if (i % 2 === 0) {
//         console.log(numbers[i]);
//     }
//     i++;
// }


// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (let i = 0; i < numbers.length; i++) {
//     if (i % 2 === 0) {
//         console.log(numbers[i]);
//     }
// }


// for (let i = numbers.length - 1; i >= 0; i--) {
//     const number = numbers[i];
//     if (i % 2 === 0) {
//         console.log(numbers[i]);
//     }
// }


// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let i = 0;
// while (i < numbers.length) {
//     if (numbers[i] % 2 === 0){
//         console.log(numbers[i]);
//     }
//     i++;
// }


// 6. перебрати циклом for та вивести  числа тільки парні  значення
// for (let i of numbers){
//     if (numbers[i] % 2 === 0) {
//         console.log(numbers[i]);
//     }
// }


// for (i = numbers.length - 1; i >= 0; i--) {
//     if (numbers[i]%2 === 0){
//         console.log(numbers[i]);
//     }
// }


// 7. замінити кожне число кратне 3 на слово "okten
// for (i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 3 === 0) {
//         numbers[i] = 'okten';
//     }
//     console.log(numbers[i]);
// }

// for (i = numbers.length - 1; i >= 0; i--) {
//     let okten = numbers[i];
//     if (numbers[i] % 3 === 0) {
//         okten = 'okten'
//     }
//     console.log(okten);
// }


// 8. вивести масив в зворотньому порядку.
// for (let i = numbers.length - 1; i >= 0; i--) {
//     const number = numbers[i];
//     document.write(number);
// }


// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)