window.addEventListener('DOMContentLoaded', function(){
    
    'use strict';

    // tabs
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
            tab[i].classList.remove('active');
        }
    }

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    function activeTab(c) {
        tab[c].classList.add('active');
    }

    info.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    activeTab(i);
                    break;
                }
            }
        }
    });

    // timer

    let deadline = '2020-03-22 GMT+0700';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor((t / 1000) % 60),
        minutes = Math.floor((t / 1000 / 60) % 60),
        // hours = Math.floor((t / 1000 / 60 /60) % 24),
        // days = Math.floor(t / (1000*60*60*24)),
        hours = Math.floor(t / (1000*60*60));

        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }
    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateTime, 1000);

        function updateTime() {
            let t = getTimeRemaining(endtime);
            
            if (t.total <= 0) {
                clearInterval(timeInterval);
                // hours.textContent = '00';
                // minutes.textContent = '00';
                // seconds.textContent = '00';
            } else {
                let addZero = function(num) {
                    if (num < 10) {
                        return '0' + num;
                    } else {
                        return num;
                    }
                };
                hours.textContent = addZero(t.hours);
                minutes.textContent = addZero(t.minutes);
                seconds.textContent = addZero(t.seconds);

            }
            

        }

    }

    setClock('timer', deadline);


    //modal

    let more = document.querySelector('.more'),
        descrBtn = document.querySelectorAll('.description-btn'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    more.addEventListener('click', function() {
        overlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', function(){
        overlay.style.display = 'none';
        document.body.style.overflow = '';
    } );

    descrBtn.forEach(function(item) {
        item.addEventListener('click', function() {
            overlay.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });

    // post form

    let message = {
        loading: "Загрузка...",
        sucsess: "Спасибо! Скоро мы с Вами свяжемся!",
        failure: "Что-то пошло не так..."
    };
    
    let form = document.querySelector('.main-form'),
        formDown = document.querySelector('#form'),
        statusMessage = document.createElement('div');
         
    
        statusMessage.classList.add('status');
    
    function sendForm(elem){
    
        elem.addEventListener('submit', function (event) {
            event.preventDefault();
            elem.appendChild(statusMessage);
        
            let formData = new FormData(elem);
        
            function postData() {
                return new Promise(function (resolve, reject) {
                    let request = new XMLHttpRequest();
                    request.open('POST', 'server.php');
                    request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
            
                    request.onreadystatechange = function () {
                        if(request.readyState < 4) {
                            resolve();
                        } else if (request.readyState === 4) {
                            if (request.status == 200 && request.status < 300) {
                                resolve();
                            } else {
                                reject();
                            }
                        }
                    };
        
                request.send(formData);
    
                });
            }
        
            function clearInput() {
                let input = elem.querySelectorAll('input');
                for (let i = 0; i < input.length; i++) {
                    input[i].value = '';
                }
            }

            let closeModal = function() {
                if (overlay.style.display == 'block') {
                    overlay.style.display = 'none';
                    document.body.style.overflow = ''; 
                }
            };
        
            postData (formData)
                .then (() => statusMessage.innerHTML = message.loading)
                .then (() => statusMessage.innerHTML = message.sucsess)
                .catch (() => statusMessage.innerHTML = message.failure)
                .then (clearInput)
                .then(setTimeout(closeModal, 3000));
        });
    
    }
    
    sendForm(form); 
    sendForm(formDown);


    //slider 

    let sliderIndex = 1,
        sliders = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');

    showSlides(sliderIndex);

    function showSlides(n) {

        if (n > sliders.length) {           // проверка если заканчиваются слайды то переходим на самый первый
            sliderIndex = 1;
        }

        if (n < 1) {
            sliderIndex = sliders.length;
        }

        sliders.forEach((item) => item.style.display = 'none');
        // for (let i = 0; i < sliders.length; i++) {      тоже самое что и методом forEach
        //     sliders[i].style.display = 'none';
        // }
        dots.forEach((item) => item.classList.remove('dot-active'));

        sliders[sliderIndex - 1].style.display = 'block';
        dots[sliderIndex - 1].classList.add('dot-active');
    }

    function plusSlides(n) {
        showSlides(sliderIndex += n);
    }

    prev.addEventListener('click', function(){
        plusSlides(-1);
    });

    next.addEventListener('click', function() {
        plusSlides(1);
    });

    
});