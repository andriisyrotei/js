// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let divElement = document.createElement('div');
divElement.classList.add('wrap', 'collapse', 'alpha', 'beta');
divElement.style.background = 'coral';
divElement.style.color = 'gold';
divElement.style.fontSize = '20px';
divElement.innerText = 'Hello World';
document.body.appendChild(divElement);

let divElementClone = divElement.cloneNode(true);
document.body.appendChild(divElementClone);


// - Є масив:
//     Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
let array = ['Main', 'Products', 'About us', 'Contacts'];
let menu = document.getElementsByClassName('menu')[0];
for (const element of array) {
    let li = document.createElement('li');
    li.innerText = element;
    menu.appendChild(li);
}


// - Є масив
//
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}];

    coursesAndDurationArray.forEach(value => {
        let div = document.createElement('div');
        let text = '';
        for (let key in value) {
            text+= `${key}: ${value[key]}`
        }
        div.innerText = text;
        document.body.appendChild(div);
    })



coursesAndDurationArray.forEach(value => {
    let divElement1 = document.createElement('div');
    divElement1.classList.add('item');
    let h1 = document.createElement('h1');
    h1.classList.add('heading');
    let p = document.createElement('p');
    p.classList.add('description');
    h1.innerText = value.title;
    p.innerText = value.monthDuration;
    divElement1.append(h1, p);
    document.body.appendChild(divElement1);
})
