/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

// Код возьмите из предыдущего домашнего задания

'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '12');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {

    },
    actors: {

    },
    genres: [

    ],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const lastFilm = prompt('Один из последних просмотренных фильмов?', 'logan'),
        lastFilmRating = +prompt('На сколько оцените его?', '8.1');

    if (lastFilm !== null && lastFilmRating !== null && lastFilm != '' && lastFilm.length < 50) {
        personalMovieDB.movies[lastFilm] =  lastFilmRating;
    } else {
        i--;
    }
    switch(true) {
        case personalMovieDB.count < 10:
            console.log('Просмотрено довольно мало фильмов');
            break;
        case personalMovieDB.count > 10 || personalMovieDB.count < 30:
            console.log('Вы классический зритель');
            break;
        case personalMovieDB.count > 30:
            console.log('Вы киноман');
            break;
        default:
            console.log('Error');
            break;
    }
    personalMovieDB.movies[lastFilm] =  lastFilmRating;
    
}


console.log(personalMovieDB);
