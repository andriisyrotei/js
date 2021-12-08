// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function rectangle(a, b) {
//     return a * b;
// }
// document.write(rectangle(7, 9));


// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function round (r) {
//     return Math.PI * Math.pow(r, 2);
// }
//
// console.log(round(12));


// створити функцію яка обчислює та повертає площу циліндру S= 2πRH
// function cylinder (r, h) {
//     return 2 * Math.PI * r * h;
// }
//
// console.log(cylinder(7, 14));


// створити функцію яка приймає масив та виводить кожен його елемент
// let array = ['Metallica', 'Iron Maiden', 1983, 1980, 77, 23, 27];
//
// function elementsArray(array) {
//     for (let i = 0; i < array.length; i++) {
//         document.write(array[i]);
//     }
//
// }
//
// elementsArray(array);
//
//


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function createParagraph(text) {
// document.write(`<p>${text}</p>`)
// }
// createParagraph('For Whom The Bell Tools');


// створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function createList(a, b, c) {
//     document.write(`<ul>`);
//     document.write(`<li>${a}</li>`)
//     document.write(`<li>${b}</li>`)
//     document.write(`<li>${c}</li>`)
//     document.write(`</ul>`)
// }
//
// createList('Hallowed Be Thy Name', 'Orion', 'Nothing Else Matters')


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function createListNumber (string, num) {
//     document.write(`<ul>`);
//     for (let i = 0; i < num; i++) {
//         document.write(`<li>${num}</li>`)
//     }
//     document.write(`</ul>`)
// }
//
// createListNumber('text', 3);


// // - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let array = ['Judas Priest', 'Manowar', 17, 25, true, false];
//
// function createArrayList (array) {
//     document.write(`<ul>`);
//     for (i = 0; i < array.length; i++) {
//         document.write(`<li>${array[i]}</li>`);
//     }
//     document.write(`</ul>`);
// }
//
// createArrayList(array);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let arrayUsers = [
//     {
//         id: 1,
//         name: 'Steve',
//         age: 35,
//     },
//     {
//         id: 2,
//         name: 'Bruce',
//         age: 16,
//     },
//     {
//         id: 3,
//         name: 'Rob',
//         age: 21,
//     }
// ]
//
//
// function showUsers (arrayUsers){
//     document.write(`<div>`);
//     for (const arrayUser of arrayUsers) {
//     document.write(`<div>${arrayUser.id}. ${arrayUser.name} - ${arrayUser.age}</div>`)
//     }
// }
//
// showUsers(arrayUsers);


