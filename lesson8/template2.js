// a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
let mainHeader = document.getElementById('main_header');
mainHeader.innerText = 'SEP-2021';

//    b) робить шириниу елементу ul 400px
let ulTag = document.getElementsByTagName('ul');
ulTag[0].style.width = '400px';

//    c) робить шириниу всіх елементів з класом linkList шириною 50%
let linkListClass = document.getElementsByClassName('linkList');
for (const liElement of linkListClass) {
liElement.style.width = '50%';
}

//    d) отримує текст який зберігається в елементі з класом listElement2
let liGetText = document.getElementsByClassName('listElement2');
console.log(liGetText);

//    e) отримує всі елементи li та змінює ім колір фону на сірий
let liTagGet = document.getElementsByTagName('li');
for (const liTagGetElement of liTagGet) {
    liTagGetElement.style.background = 'gray';

}

//    f) отримує всі елементи 'a' та додає їм клас anchor
let getA = document.getElementsByTagName('a');
for (const aElement of getA) {
 aElement.classList.add('anchor');
 console.log(aElement);
}


// let getAnchor = document.getElementsByClassName('anchor');
// console.log(getAnchor);


//    g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
let aChangeText = document.getElementsByTagName('a');
for (const aChangeTextElement of aChangeText) {
    if (aChangeTextElement.innerText === "link3") {
        aChangeTextElement.style.fontSize = '40px';
    }
}


//    h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a




//    i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let changeColorSubHeader = document.getElementsByClassName('sub-header');
for (const changeColorSubHeaderElement of changeColorSubHeader) {
    // changeColorSubHeaderElement.style.color = prompt('Enter color')
}


// /    j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
let changeColorSegment = document.getElementsByClassName('sub-header');
for (const changeColorSegmentElement of changeColorSegment) {
    if (changeColorSegmentElement.innerText === 'content 2 segment') {
        // changeColorSegmentElement.style.color = prompt('Enter color2')
    }
}


//    k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
let changeTextContent1 = document.getElementsByClassName('content_1');
// changeTextContent1[0].innerText = prompt ('Enter text');


//    l) отримати елементи p та змінити їм padding на 20px
let elementsByTagNameP = document.getElementsByTagName('p');
for (const elementsByTagNamePElement of elementsByTagNameP) {
    elementsByTagNamePElement.style.padding = '20px';
    elementsByTagNamePElement.style.border = '1px solid red';
}

//    m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
let text2 = document.getElementsByClassName('text2');
text2[0].innerText = 'sep-2021';

