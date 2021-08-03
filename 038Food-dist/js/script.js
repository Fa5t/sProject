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

    function User(name, age) {
        this.name = name;
        this.age = age;
        this.hello = () => {
            console.log(`Привет - ${this.name}`);
        }
    }

    const Stas = new User('Stas' , 23);
    console.log(Stas);
    Stas.hello();

    modalTrigger(modalWidow, modal);
    closingModal(closeModal, modal)
    

});