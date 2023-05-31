// 1 Задание
/* <div class="block">
	
</div> */
// Дан блок, внутри него необходимо создать элемент div с классом item, разместить текст “Элемент внутри” и задать стили
// Цвет текста синий
// Рамка сплошная черная
// Цвет фона #f8f8f8
// Внутренний отступ 16px
// Добавить данному блоку класс item_1 (использовать setAttribute)

// const divContent = document.querySelector('.block');
// const divEl = document.createElement('div');

// divEl.className = 'item';
// divEl.textContent = 'Элемент внутри';
// divContent.appendChild(divEl);
// divEl.style.color = 'blue';
// divEl.style.border = '3px solid black';
// divEl.style.backgroundColor = '#f8f8f8';
// divEl.style.padding = '16px';
// divEl.setAttribute('class', 'item_1')

// 2 Задание
// <div class="elem">
//   <img src="photo.png" alt="photo">
//   <div class="content">
//     <h2 class="heading">Lorem, ipsum dolor.</h2>
//     <p class="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, ea!</p>
//   </div>
// </div>

// Необходимо с помощью querySelector найти параграф с классом text
// Вывести в консоль соседний элемент h2
// Вывести в консоль родительский элемент content
// Вывести в консоль картинку
// Вывести в консоль родительский элемент elem

// const paragraphEl = document.querySelector('.text')
// console.log(paragraphEl);
// console.log(paragraphEl.previousElementSibling);
// console.log(paragraphEl.parentElement);
// console.log(paragraphEl.parentNode.previousElementSibling);
// console.log(paragraphEl.parentElement.parentElement);

// 3 Задание
/* <div class="item">
  <div class="elem">
    <div class="info">
      <h2 class="subtitle">Lorem, ipsum dolor.</h2>
    </div>
  </div>
</div> */
// С помощью querySelector найти элемент h2  и вывести в консоль всех его родителей

// let h2El = document.querySelector('.subtitle');

// while (h2El) {
//     console.log(h2El);
//     h2El = h2El.parentElement
// }

// 4 Задание
/* <form action="#">
  <input type="text">
  <button class="btn">Отправить</button>
</form> */
// Дано поле ввода и кнопка отправить, необходим реализовать функционал, если пользователь нажимает на кнопку отправить, а поле ввода пустое, то под полем ввода и кнопкой должен появиться заголовок h2 с текстом вы не заполнили поле ввода
// У поля ввода должна появиться рамка красного цвета

const formElem = document.querySelector('form');
formElem.className = 'form';
const formEl = document.querySelector('.form');

const inputElem = document.querySelector('input');
inputElem.className = 'input';
const inputEl = document.querySelector('.input');

const buttonEl = document.querySelector('.btn');

const h2El = document.createElement('h2');
h2El.textContent = 'Вы не заполнили поле ввода';

formEl.addEventListener('submit', function (e) {
e.preventDefault();
if (inputEl.value === '') {
    formEl.append(h2El);
    inputEl.style.border = '1px solid red';
    }
}); 
 