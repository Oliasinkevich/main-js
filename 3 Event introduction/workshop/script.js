// 1 задание

// В html создать кнопку button
// После загрузки страницы вывести в консоль текст “страница загрузилась”
// Добавить событие onclick которое выводит в консоль текст “событие onclick”
// Добавить событие addEventListener которое выводит в консоль текст “событие addEventListener”

// window.addEventListener('load', function (e) {
// console.log('Загрузилась');
// });
    
// window.addEventListener('DOMContentLoaded', function (e) {
// console.log('Загрузилась 2');
// });
    
// const buttonEl = document.querySelector('.button');
    
// buttonEl.addEventListener('click', function (e) {
// console.log(this);
// });
    
// buttonEl.addEventListener('click', function (e) {
// console.log('Новый клик! 2');
// });

// 2 задание
// Создать в html три кнопки button с нумерацией (1, 2, 3 соответственно)
// Добавить клик на кнопку , чтобы в консоль выводилась именно та кнопка на которую мы нажали
// Добавить кнопку button с текстом 4, которая считает сколько раз на нее нажали и количество нажатий на эту кнопку выводит в консоль
// Создать кнопку button с текстом 5, При клике на которую, меняется текст данной кнопки на “Вы нажали на эту кнопку”

// const butEl = document.querySelectorAll('button');
// const but = (e) => {
// console.log(e.target);
// }

// butEl.forEach(element => {
// element.addEventListener('click', but);
// });

// const but4 = document.createElement('button');
// but4.textContent = 'Кнопка 4';
// const content = document.querySelector('.but');
// content.append(but4);

// let count = 0;
// but4.addEventListener('click', function (e) {
// console.log(`нажали ${++count} раз`);
// });

// const but5 = document.createElement('button');
// but5.textContent = 'Кнопка 5';
// content.append(but5);

// but5.addEventListener('click', function (e) {
// but5.textContent = 'Вы нажали на эту кнопку';
// });

// 3 задание
// Создать кнопку, которая добавляет заголовок h1 с текстом, “Новый заголовок, данный элемент нужно расположить после кнопки
// Создать вторую кнопку, которая будет удалять созданный заголовок h1
// Создать третью кнопку, при наведении на которую в консоль будет выводиться текст “вы навели на данную кнопку” , как только вы убираем курсор мыши с кнопки, в консоли должен появиться текст “Наведения на кнопку больше нет”

// const body = document.querySelector('body');
// body.insertAdjacentHTML('afterbegin', '<button class="but1">Кнопка1</button>');
// const but1 = document.querySelector('.but1');
// const h1 = document.createElement('h1');
// h1.textContent = 'Новый заголовок';
// but1.addEventListener('click', function (e) {
// body.append(h1);
// });

// body.insertAdjacentHTML('beforeend', '<button class="but2">Кнопка2</button>');
// const but2 = document.querySelector('.but2');
// but2.addEventListener('click', function (e) {
// h1.remove();

// });

// body.insertAdjacentHTML('beforeend', '<button class="but3">Кнопка3</button>');
// const but3 = document.querySelector('.but3');
// but3.addEventListener("mouseover", (e) => {
// console.log('Вы навели на данную кнопку');
// });
// but3.addEventListener("mouseout", (e) => {
// console.log('Наведения на кнопку больше нет');
// }); 

// 4 задание
// Дан тег <div class="content"></div> 
// Создайте с помощью javascript новый элемент button
// Добавьте текст для кнопки “Отправить”
// При клике на данную кнопку необходимо чтобы текст поменялся на “Текст отправлен”

// const bodyEl = document.querySelector('body');
// const btnEl = document.createElement('button')
// btnEl.textContent = 'Отправить';
// btnEl.className = 'button';
// bodyEl.append(btnEl)

// btnEl.addEventListener('click', function (e) {
//     btnEl.textContent = 'Текст отправлен';
// });

// 5 задание
// Создать в html список состоящий из 3-х произвольных элементов li
// Нужно создать кнопку которая будет добавлять элементы списка с текстом “новый элемент списка”
// Создать кнопку, которая будет удалять первый элемент из созданного списка
// Создать кнопку, при клике на которую ей добавляется класс “click”

const bodyEl = document.querySelector('body');
const ulEl = document.querySelector('.lists');
const addItemListEl = document.createElement('button');

addItemListEl.textContent = 'Добавить элемент в список';
bodyEl.append(addItemListEl);
addItemListEl.addEventListener('click', () => {
ulEl.insertAdjacentHTML('beforeend', '<li>Новый элемент</li>');
});

const eraseFirstListEl = document.createElement('button');
eraseFirstListEl.textContent = 'Удалить первый элемент списка';
bodyEl.append(eraseFirstListEl);
eraseFirstListEl.addEventListener('click', function (e) {
const lastItemEl = ulEl.firstElementChild;
console.log(lastItemEl);
lastItemEl.remove();
});

const buttonClickEl = document.createElement('button');
buttonClickEl.textContent = 'Добавь Click-класс';
bodyEl.append(buttonClickEl);
buttonClickEl.addEventListener('click', () => {
buttonClickEl.classList.toggle('click');
})