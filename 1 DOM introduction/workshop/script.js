// 1 Заданиe
// <div id="block">
//     <p>1</p>
//     <p>2</p>
// </div>
// 1 Получите ссылку на первый абзац из дива с id, равным block, выведите его в консоль

// const div1 = document.querySelector('p:first-child');
// console.log(div1);
    
// 2 Получите ссылку на первый абзац с классом www.и вывести его в консоль -->
// <p class="www"> text 1</p>
// <p class="www">text 2</p>

// const pEl = document.querySelector('.www');
// console.log(pEl);

// 2 Задание
// 1 Дан тег
// <a class="link" href="#">link text html</a>
// Вам необходимо поменять текст внутри ссылки на “link text js”
// Заменить href, на значение https://developer.mozilla.org/ru/

// const linkEl = document.querySelector('.link');
// linkEl.textContent = 'link text js';
// linkEl.href = 'https://developer.mozilla.org/ru/';

// console.log(linkEl.textContent);
// console.log(linkEl.href);

// 2 Дан тег
// <img class="photo" src="" alt="">
// Вам необходимо с помощью js поменять значение src на любое изображение из интернета

// const img = document.querySelector('.photo');
// img.src = 'https://decoreo.ru/wp-content/uploads/2016/12/3d_panel_069_5.jpg';
// img.height = 400;
// img.alt = 'Interior photo with 3d panels';

// console.log(img);
// console.log(img.src);
// console.log(img.alt);

// 3 Задание
// Дан тег
// <div class="content"></div>
// Создайте новый элемент p
// Добавьте в него текст “Новый текстовый элемент”
// Добавьте созданный элемент внутри
// <div class="content"></div>
// Удалите добавленный узел

// const contentDiv = document.querySelector('.content')
// console.log(contentDiv);
// const ParagraphEl = document.createElement('p');
// console.log(ParagraphEl);
// ParagraphEl.textContent = 'Новый текстовый элемент';
// console.log(ParagraphEl.textContent);

// contentDiv.appendChild(ParagraphEl);
// console.log(contentDiv.ParagraphEl);

// ParagraphEl.remove()

// 4 Задание
// Создать элемент button, добавить в блок
// <div class="content"></div>
// При клике на который в консоль выводится сколько раз пользователь нажал на данную кнопку

// const contentEl = document.querySelector('.content')
// const countEl = document.createElement('button');
// contentEl.appendChild(countEl);
// countEl.textContent = 'Считает нажатия на себя';
// console.log(countEl);
// let count = 0;
// countEl.onclick = () => {
//     count++;
//     countEl.textContent = `Нажато  ${count} раз`;
// };

// 5 Задание
// Дан тег
// <div class="content"></div>
// Создайте с помощью javascript новый элемент button
// Добавьте текст для кнопки “Отправить”
// При клике на данную кнопку необходимо чтобы текст поменялся на “Текст отправлен”
// Создать вторую кнопку, при клике на которую должен появляться параграф с произвольным текстом.
// При нажатии на вторую кнопку еще раз, текст должен пропадать.

// const contentEl = document.querySelector('.content');
// const textEL = document.createElement('button');
// textEL.textContent = 'Отправить';
// contentEl.appendChild(textEL);


// const buttonAdd = document.createElement('button');
// buttonAdd.textContent = 'Куку';
// contentEl.appendChild(buttonAdd);
// const pEl = document.querySelector('.text');
// console.log(pEl);
// buttonAdd.onclick = function () {

//     if (pEl.textContent === '') {
//         pEl.textContent = 'Hi';
//     } else {
//         pEl.textContent = '';
//     }
// }
// textEL.onclick = function () {
//     textEL.textContent = 'Отправлено';

// }

// или
// const contentEl = document.querySelector('.content');
// const switchEl = document.createElement('button');
// contentEl.appendChild(switchEl);
// switchEl.textContent = 'Добавляет / удаляет параграф';
// switchEl.onclick = () => {
//     if (document.querySelector('.switch') == null) {
//         const pSwitchEl = document.createElement('p');
//         pSwitchEl.textContent = 'Новый параграф появился!!!!!!!!!!!!!!!';
//         contentEl.appendChild(pSwitchEl);
//         pSwitchEl.className = 'switch';
//         pSwitchEl.style.cssText = 'border: 1px solid #aaffcc; color: tomato;';
//         pSwitchEl.classList.add('border: 1px solid #aaffcc');
//     } else {
//         document.querySelector('.switch').remove();
//     }
// }
