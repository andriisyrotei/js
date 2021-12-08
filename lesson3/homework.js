// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль


let nums = [10, 20, 30, 40, 50];
let strings = ['Syrotei', 'Andrii', 'javascript', 'html', 'css'];
let objects = ['Man United', 1878, true, false, 0];
console.log(nums, strings, objects);


// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let array = [];
array[0] = 27;
array[1] = 'Hello';
array[2] = 'world';
array[3] = true;
array[4] = false;
console.log(array);


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let i = 0; i < 10; i++) {
//     document.write('<div>Item</div>');
// }


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>Item${i}</div>`);
// }


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i = 0;
// while (i < 20) {
//     document.write('<h1>Item</h1>')
//
//     i++
// }


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let i = 0;
// while (i < 20) {
//     document.write(`<h1>Item${i}</h1>`)
//
//     i++
// }


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// for (let i = 0; i < numbers.length; i++) {
//     const num = numbers[i];
//     console.log(numbers);
// }


// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let stringElements = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'l'];
// for (let i = 0; i < stringElements.length; i++) {
//     const str = stringElements[i];
//     console.log(stringElements);
//
// }


// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let elements = ['a', 'b', 'c', true, false, 15, 10, 25, 11, 33];
// for (let i = 0; i < elements.length; i++) {
//     let elem = elements[i];
//     console.log(elements);
// }


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let elements = ['a', 'b', 'c', true, false, 15, 10, 25, 11, 33];
// for (let i = 0; i < elements.length; i++){
//     const elem = elements[i];
//     if (typeof elem === 'boolean') {
//         console.log(elem);
//     }
// }


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let items = [215, 36, 25, 65, 'big', 'bang', 'theory', false, true, '0'];
// for (let i = 0; i < items.length; i++){
//     const nums = items[i];
//     if (typeof nums === 'number') {
//         console.log(nums);
//     }
// }


// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let array1 = [10, 25, 15, 36, 66, 'a', 'b', 'c', true, false];
// for (let i = 0; i < array1.length; i++) {
//     const string = array1[i];
//     if (typeof string === 'string') {
//         console.log(string);
//     }
// }


// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

let customElements = [];
for (i = 0; i < 10; i++) {

}


// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 10; i++) {
//     console.log(i);
//     document.write(i);
// }


// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for ( let i = 0; i < 100; i++) {
//     console.log(i);
//     document.write(i);
// }


// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i +=2) {
//     console.log(i);
//     document.write(i);
// }


// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 0 && i !== 0) {
//         console.log(i);
//     }
// }


// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 1; i < 100; i++) {
//     if (i % 3 === 0) {
//         console.log(i);
//     }
// }