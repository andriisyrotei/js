// - Дано список імен.
// let user = ['Harry..Potter', 'Ron---Whisley', 'Hermione__Granger';]
//
// if (user.includes('..')) {
//     user.
// }


// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione___Granger'



let normalize = () => {
    return n1.replaceAll('..', ' ');
}

document.write(normalize(n1));



let name = (string, symbol) => {
    let newArr = [];
    if (string.includes(symbol)) {
        let a = string.split(symbol)
        a.forEach((item) => {
            if (item) newArr.push(item);
        })
        console.log(newArr.join(' '))
    }
}
name(n1, '.');




//  - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// let getRanArray = (length, limit) => {
//     let array = [];
//     for (i = 0; i < length; i++) {
//         array.push(Math.round(Math.random() * limit));
//     } return array;
// }
//
// let result = getRanArray(10, 100);
// console.log(result);



// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
// result.sort((a,b) => a - b);
// console.log(result);



// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа
// let getFiltered = (length, limit) => {
//     let array = [];
//     for (let i = 0; i < length; i++) {
//         array.push(Math.round(Math.random() * limit));
//     } return array.filter(value => value % 2 === 0);
// }
//
// console.log(getFiltered(10, 100));



// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let numToString = (length, limit) => {
//     let array = [];
//     for (let i = 0; i < length; i++) {
//         array.push(Math.round(Math.random() * limit));
//     }
//     return array.map(value => value + '');
// }
//
// console.log(numToString(10, 100));



// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
// let nums = [11, 25, 558, 665, 201, 336];
// let sortNums = (arr, direction) => {
//     if (direction === 'up') {
//         return arr.sort((a, b) => a - b);
//     } else if (direction === 'down') {
//         return arr.sort((a,b) => b - a);
//     } else return 0;
// }
//
// console.log(sortNums(nums, 'down'));


// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

// let sortArray = coursesAndDurationArray.sort((a,b) => b.monthDuration - a.monthDuration)
// console.log(sortArray);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let filterArray = coursesAndDurationArray.filter((value) => {
//     return value.monthDuration > 5;
// })

// console.log(filterArray);



