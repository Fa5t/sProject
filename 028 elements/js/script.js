/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

// Возьмите свой код из предыдущей практики

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const promoAdv = document.querySelector('.promo__adv'),
    imgPromoAdv = promoAdv.querySelectorAll('img'),
    promoBG = document.querySelector('.promo__bg'),
    promoGenre = promoBG.querySelector('.promo__genre'),
    interactiveItem = document.querySelectorAll('.promo__interactive-item'),
    promoList = document.querySelector('.promo__interactive-list');

function removeNode(node) {
    node.forEach(item => {
        item.remove();
    });
}

removeNode(imgPromoAdv);

function changeText(node) {
    const text = 'драма';
    node.textContent = text;
}

changeText(promoGenre);

promoBG.style.backgroundImage = 'url("img/bg.jpg")';

/*
function filmName(node) {
    movieDB.movies.sort();
    node.forEach((item, i) => {
        item.innerHTML = `${i+1} ${movieDB.movies[i]}`;
    });
}
filmName(interactiveItem);
*/

promoList.innerHTML = '';
movieDB.movies.sort();
movieDB.movies.forEach((film, i) => {
    promoList.innerHTML += `<li class="promo__interactive-item">${i+1} ${film}
    <div class="delete"></div>
</li>`
});