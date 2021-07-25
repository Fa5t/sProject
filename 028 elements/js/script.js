/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

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