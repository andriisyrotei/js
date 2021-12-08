// - Знайти та вивести довижину настипних стрінгових значень
// let length1 = 'hello world';
// console.log(length1.length);
//
// let length2 = 'lorem ipsum';
// console.log(length2.length);
//
// let length3 = 'javascript is cool';
// console.log(length3.length);


// - Перевести до великого регістру наступні стрінгові значення
// let str1 = 'hello world';
// let toUpperCase1 = str1.toUpperCase();
// console.log(toUpperCase1);
//
// let str2 = 'lorem ipsum';
// let toUpperCase2 = str2.toUpperCase();
// console.log(toUpperCase2);
//
// let str3 = 'javascript is cool';
// let toUpperCase3 = str3.toUpperCase();
// console.log(toUpperCase3);


// - Перевести до нижнього регістру настипні стрінгові значення
// let str1 = 'HELLO WORLD';
// let toLowerCase1 = str1.toLowerCase();
// console.log(toLowerCase1);
//
// let str2 = 'LOREM IPSUM';
// let toLowerCase2 = str2.toLowerCase();
// console.log(toLowerCase2);
//
// let str3 = 'JAVASCRIPT IS COOL';
// let toLowerCase3 = str3.toLowerCase();
// console.log(toLowerCase3);


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   ';
// let trim = str.trim();
// console.log(trim);


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Каждый охотник желает знать';
// let stringToArray = () => {
//     return str.split(' ');
// }
//
// console.log(stringToArray(str));


// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
// let deleteCharacters = () => str.substring(0, 7);
// console.log(deleteCharacters([]));


// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.\
// При цьому всі символи рядка необхідно перевести у верхній регістр.
// let str = "HTML JavaScript PHP";
// function insert_dash(str) {
//     return str.replaceAll(' ', '-').toUpperCase();
// }
//
// console.log(insert_dash(str));


// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
// let firstUp = (str) => str[0].toUpperCase() + str.slice(1);
// document.write(firstUp('manchester united'));