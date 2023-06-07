// 1 задание

// В html создать элемент checkbox и текст рядом с ним “Согласен с условиями”
// Добавить кнопку отправить
// При клике на кнопку отправить нужно проверять выбран ли активным элемент checkbox
// Если элемент не выбран, добавить текст под чекбоксом “Необходимо согласиться с условиями”

// const inputEl = document.querySelector('input[type = checkbox]');
// const formEl = document.querySelector('form');;

// formEl.addEventListener('submit', function (e) {
//     if (inputEl.checked) {
//         console.log('Отлично');
//     } else {
//         e.preventDefault();
//         const errorEl = document.createElement('div');
//         errorEl.textContent = 'Необходимо согласиться с условиями'
//         formEl.appendChild(errorEl);
//     }
// })

// 2 задание

// В html создать 2 элемента радио кнопки (input type=”radio”) и текст “Чай”, “Кофе” соответственно
// Кнопка отправить
// Если выбран чай, необходимо вывести сообщение “Чай закончился”
// Если выбран кофе, необходимо вывести сообщение “Кофе закончился”

// const formEl = document.querySelector('form');
// const teaEl = document.querySelector('.radio_tea');
// const coffeeEl = document.querySelector('.radio_coffee');

// formEl.addEventListener('submit', function (e) {
//     e.preventDefault();
//     if (teaEl.checked) {
//         console.log('Чай закончился');
//     } else if (coffeeEl.checked) {
//         console.log('Кофе закончился'); 
//     }
//     else {
//         console.log('Выберите уже что-нибудь');
//     }
// });

// 3 задание
// Создать поле ввода (пароль)
// Кнопка отправить
// Если пользователь вводит текст “пароль” то поле ввода должно быть подсвечено зеленым цветом
// Если пароль неверный, у поля ввода появляется красная обводка и текст “пароль неверный”

// const formEl = document.querySelector('form');
// const inputEl = document.querySelector('input');
// const btnEl = document.querySelector('button');

// formEl.addEventListener('submit', function (e) {
//     e.preventDefault
//   if (inputEl.value = 'пароль') {
//     inputEl.style.backgroundColor = 'green';
//   } else {
//     inputEl.style.border = '1px solid red'
//     const divEl = document.createElement('div');
//     divEl.textContent = 'Пароль неверный';
//     formEl.append(divEl);
//   }  
// })

// 4 задание

// Создать поле ввода и под ним заголовок h1 с текстом “Заголовок”
// При вводе текста в поле ввода необходимо чтобы текст внутри заголовка менялся на введенный в поле ввода
// * Создать список покупок, вводим, нажимаем добавить и он добавляет в список.

const formEl = document.querySelector('form');
const inputEl = document.querySelector('input');
const h1El = document.querySelector('h1');

// inputEl.addEventListener('input', function (e) {
//     h1El.textContent = inputEl.value
// })

const ulEl = document.querySelector('ul');
const btnEl = document.querySelector('button');

btnEl.addEventListener('click', function (e) {
    const liEl = document.createElement('li');
    liEl.textContent = inputEl.value;
    ulEl.append(liEl);
})

 
