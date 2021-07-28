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

// Возьмите свой код из предыдущей практики

'use strict';

document.addEventListener('DOMContentLoaded', () => {
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
        //interactiveItem = document.querySelectorAll('.promo__interactive-item'),
        promoList = document.querySelector('.promo__interactive-list'),
        delFilm = document.querySelectorAll('.delete'),
        addFilmForm = document.querySelector('form.add'),
        addingInput = addFilmForm.querySelector('.adding__input'),
        favFilm = addFilmForm.querySelector('[type="checkbox"]');
    
    const removeNode = (node) => {
        node.forEach(item => {
            item.remove();
        });
    }
    removeNode(imgPromoAdv);
    
    const changeText = (node) => {
        const text = 'драма';
        node.textContent = text;

        promoBG.style.backgroundImage = 'url("img/bg.jpg")';
    }
    
    changeText(promoGenre);
    
    /*
    function filmName(node) {
        movieDB.movies.sort();
        node.forEach((item, i) => {
            item.innerHTML = `${i+1} ${movieDB.movies[i]}`;
        });
    }
    filmName(interactiveItem);
    */
    
    // addingBtn.addEventListener('click', () => {
    //     if(addingInput.value != '') {
    //         movieDB.movies += addingInput.value;
    //         console.log(movieDB.movies);
    //     }
    // })

    addFilmForm.addEventListener('submit', (e) => {
        e.preventDefault();
    
        let newFilm = addingInput.value;
        const favoriteFilm = favFilm.checked;

        if(newFilm) {
            if(newFilm.length > 21) {
                newFilm = newFilm.substring(1, 22) + '...';
                console.log(newFilm);
            }
    
            if(favoriteFilm === true) console.log("Добавляем любимый фильм");
    
            movieDB.movies.push(newFilm);
            movieDB.movies.sort();
    
            createFilmList(movieDB, promoList);
        }
        
    })

    function createFilmList(films, parent) {
        parent.innerHTML = '';
        movieDB.movies.sort();

        films.movies.forEach((film, i) => {
            parent.innerHTML += `
            <li class="promo__interactive-item">${i+1} ${film}
                <div class="delete"></div>
            </li>`
        });

        delFilm.forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createFilmList(films, parent);
    
            })
        });
    }
    createFilmList(movieDB, promoList);

    
})


