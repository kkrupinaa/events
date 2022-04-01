import { title } from 'process';
import { idText } from 'typescript';

/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
    const button = document.createElement('button');
    button.innerHTML = 'Удали меня';
    button.addEventListener('click', () => {
        button.remove();
    });
    document.body.appendChild(button);
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
    const ul = document.createElement('ul');
    for (let key in arr) {
        const li = document.createElement('li');
        li.innerHTML = arr[key];
        li.addEventListener('mouseover', () => {
            li.setAttribute('title', li.innerHTML);
        });
        ul.appendChild(li);
    }
    document.body.appendChild(ul);
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
    const a = document.createElement('a');
    a.innerHTML = 'tensor';
    a.setAttribute('href', 'https://tensor.ru/');
    document.body.appendChild(a);
    a.addEventListener('click', function (event) {
        let str = a.getAttribute('href');
        if (a.innerHTML.indexOf(str) == -1) {
            a.innerHTML = a.innerHTML + ' ' + str;
            event.preventDefault();
        }
    });
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
    const ul = document.createElement('ul');
    function createLi() {
        const li = document.createElement('li');
        li.innerHTML = 'Пункт';
        li.addEventListener('click', () => {
            li.innerHTML += '!';
        });
        return li;
    }
    const li = createLi();
    ul.appendChild(li);
    document.body.appendChild(ul);
    const button = document.createElement('button');
    button.innerHTML = 'Добавить пункт';
    button.addEventListener('click', function () {
        const newLi = createLi();
        ul.appendChild(newLi);
    });
    document.body.appendChild(button);
}
