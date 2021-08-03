'use strict';

document.addEventListener('DOMContentLoaded', () => {
    //Tab
    const tabsHeader = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabParent = document.querySelector('.tabheader__items');

    function hideTabsContent() {
        tabsContent.forEach(tabs => {
            tabs.style.display = 'none';
        });

        tabsHeader.forEach(tabs => {
            tabs.classList.remove('tabheader__item_active')
        });
    }

    

    function showTabContent(i = 0) {
        tabsHeader[i].classList.add('tabheader__item_active');
        tabsContent[i].style.display = 'block';
    }

    tabParent.addEventListener('click', (e) => {
        const target = e.target;
        if(target && target.classList.contains('tabheader__item')) {
            tabsHeader.forEach((tab, i) => {
                if(target == tab) {
                    hideTabsContent();
                    showTabContent(i);
                }
            });
        }
    });
    
    hideTabsContent();
    showTabContent();

    //Timer

    const deadline = '2021-08-10'

    function timeToEnd(deadline) {
        const t = Date.parse(deadline) - Date.parse(new Date()),
        days = Math.floor(t / (1000 * 60 * 60 * 24)),
        hours = Math.floor((t / (1000 * 60 * 60) % 24)),
        minutes = Math.floor((t / 1000 / 60) % 60),
        seconds = Math.floor((t / 1000) % 60);
        
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero(num) {
        if(num >=0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }
    
    function setTimer(timerId, deadline) {
        const timer = document.querySelector(timerId),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000);
        
        updateClock();

        function updateClock() {
            const t = timeToEnd(deadline);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if(t.total <= 0) crearInterval(timeInterval);
        }

    }

    setTimer('.timer', deadline);

    //Modal

    const modalWidow = document.querySelectorAll('[data-modal]'),
          closeModalWidow = document.querySelector('[data-close]'),
          modal = document.querySelector('.modal'),
          closeModal = document.querySelector('[data-close]');
    
    function modalTrigger(modalWidow, modal) {
        modalWidow.forEach(btn => {
            btn.addEventListener('click', e => {
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            })
        })
    }

    function closingModal(closeModal, modal) {
        closeModal.addEventListener('click ', e => {
            if(e.target === closeModal || e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = '';
            }
            
        })


    }

    // function User(name, age) {
    //     this.name = name;
    //     this.age = age;
    //     this.hello = () => {
    //         console.log(`Привет - ${this.name}`);
    //     }
    // }

    // const Stas = new User('Stas' , 23);
    // console.log(Stas);
    // Stas.hello();

    //1)Обычная функция this = window,но если use strict - undefined
    //2) Контекст у методов объекта - будет сам объект
    //3) this в конструкторах и классах - новый экземпляр объекта
    //4) Ручаня привязка this: call, apply, bind
     //5) Стрелочная фукнция всегда ищет и обращается к родительскому элементу, а 
     //function() самотстоятельная и не обращается.

     class CardMenu {
         constructor(src, alt, h3, text, price, transfer, parentSelector) {
            this.src = src;
            this.alt = alt;
            this.h3 = h3;
            this.text = text;
            this.price = price;
            this.transfer = transfer;
            this.parent = document.querySelector(parentSelector);
            this.convertDollarToGriv();
         }

         convertDollarToGriv() {
            this.price = this.price * this.transfer;
         }
         addHTML() {
             const elem = document.createElement('div');
             elem.innerHTML = `
                <div class="menu__item">
                <img src="${this.src}" alt="${this.alt}">
                <h3 class="menu__item-subtitle">${this.h3}"</h3>
                <div class="menu__item-descr">${this.text}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            </div>`;
            this.parent.append(elem);
         }
     }
    
    new CardMenu(
        'img/tabs/vegy.jpg', 'vegy', 'Меню Фитнес', 
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        10, 27, '.menu .container'
    ).addHTML();

    new CardMenu(
        'img/tabs/elite.jpg', 'vegy', 'Меню “Премиум”', 
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        20, 27, '.menu .container'
    ).addHTML();

    new CardMenu(
        'img/tabs/post.jpg', 'vegy', 'Меню “Постное”', 
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        15, 27, '.menu .container'
    ).addHTML();
    modalTrigger(modalWidow, modal);
    closingModal(closeModal, modal)
    

});