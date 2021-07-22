/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

// Код возьмите из предыдущего домашнего задания

const personalMovieDB = {
    count: 0,
    movies: {

    },
    actors: {

    },
    genres: [

    ],
    privat: false,

    start: () => {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '12');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '12');
        }
    },

    rememberMyFilmsa: () => {
        for (let i = 0; i < 2; i++) {
            const lastFilm = prompt('Один из последних просмотренных фильмов?', 'logan'),
                lastFilmRating = +prompt('На сколько оцените его?', '8.1');
        
            if (lastFilm !== null && lastFilmRating !== null && lastFilm != '' && lastFilm.length < 50) {
                personalMovieDB.movies[lastFilm] =  lastFilmRating;
            } else {
                i--;
            }
        }
    },

    detectPersonalLevel: () => {
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
    },

    showMyDB: (hidden) => {
        if (!hidden)  console.log(personalMovieDB);
    },

    writeYourGenres: () => {
        for (let i = 0; i < 3; i++) {
            const favGenre = prompt(`Ваш любимый жанр под номером ${i+1}`, '');
            if (favGenre !== null && favGenre !== '' && favGenre.length < 50) {
                personalMovieDB.genres[i] = favGenre;
            } else {
                i--;
            }
            
    
        }
    },

    toggleVisibleMyDB: () => {
        if(personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }
};

personalMovieDB.toggleVisibleMyDB(personalMovieDB.privat);
console.log(personalMovieDB);
