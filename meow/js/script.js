'use strict';

//BURGER OPEN/CLOSE

document.querySelector('.burger__btn').addEventListener('click', ()=>{
	document.querySelector('.burger__btn').classList.toggle('active');
	document.querySelector('.header__nav').classList.toggle('active');
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
