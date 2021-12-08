// - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content"
let content = document.getElementById('content');

// отримує текст з блоку з id "rules"
let rules = document.getElementById('rules');

// -- отримує текст з блоку з id "rules"
content.innerText = 'СВІТОВІ ЛЕГЕНДИ — ГУРТ IRON MAIDEN — УПЕРШЕ ЗІГРАЮТЬ В УКРАЇНІ 29 ТРАВНЯ 2022 РОКУ НА ВДНГ (КИЇВ)!'


// -- замініть текст параграфа з id 'rules' на будь-який інший
rules.innerText = 'IRON MAIDEN додали ще шість європейських концертів до свого туру Legacy Of The Beast 2022, включаючи ВДНГ, Київ 29 травня. Як завжди буде ексклюзивний попередній продаж для членів фан-клубу Iron Maiden. Спеціальними гостями київського шоу будуть Airbourne за підтримки Lord Of The Lost. Приготуйтеся побачити наймасштабніше та найвидовищніше шоу за всю історію гурту.'


// -- змініть кожному елементу колір фону на червоний
// -- змініть кожному елементу колір тексту на синій
content.style.background = 'red';
content.style.color = 'blue'
rules.style.background = 'red';
rules.style.color = 'blue';

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
let idRules = document.getElementById('rules');
console.log(idRules.classList);


// -- поміняти колір тексту у всіх елементів fc_rules на червоний
let elementsByClassName = document.getElementsByClassName('fc_rules');
for (const element of elementsByClassName) {
element.style.color = 'red';
}

