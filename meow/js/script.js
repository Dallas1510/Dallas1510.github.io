'use strict';

//BURGER OPEN/CLOSE

document.querySelector('.burger__btn').addEventListener('click', ()=>{
	document.querySelector('.burger__btn').classList.toggle('active');
	document.querySelector('.header__nav').classList.toggle('active');
	document.querySelector('.header').classList.toggle('active');
	document.querySelector('body').classList.toggle('lock');
})

//BURGER HIDE

let lastScroll = 0;
const defaultOffset = 60;
const header = document.querySelector('.header');

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('hide');

window.addEventListener('scroll', () => {
    if(scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
        //scroll down
        header.classList.add('hide');
    }
    else if(scrollPosition() < lastScroll && containHide()){
        //scroll up
        header.classList.remove('hide');
    }

    lastScroll = scrollPosition();
})

//FORM VALUE

function getInputValue(){
	let input = document.querySelector('.adventures__form--field');
	console.log(input.value);
}

document.querySelector('.adventures__btn').addEventListener('click', getInputValue);

//SPOILER

document.querySelector('.story__title').addEventListener('click', ()=> {
    document.querySelector('.story__texthide').classList.toggle('hide');
})

//SCROLL TO TOP

function scrollTo(to, duration = 700) {
    const
        element = document.scrollingElement || document.documentElement,
        start = element.scrollTop,
        change = to - start,
        startDate = +new Date(),
        easeInOutQuad = function (t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        },
        animateScroll = function () {
            const currentDate = +new Date();
            const currentTime = currentDate - startDate;
            element.scrollTop = parseInt(easeInOutQuad(currentTime, start, change, duration));
            if (currentTime < duration) {
                requestAnimationFrame(animateScroll);
            }
            else {
                element.scrollTop = to;
            }
        };
    animateScroll();
}

document.addEventListener('DOMContentLoaded', function () {
    let btn = document.querySelector('.to-top');
    btn.onclick = function (click) {
        click.preventDefault();
        scrollTo(0, 400);
    }
});