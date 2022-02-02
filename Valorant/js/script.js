'use strict'
new Swiper('.swiper', {
	navigation: {
		nextEl: '.button-next'
	},
	simulateTouch: false,
	loop: true,
	speed: 0,
	thumbs: {
		swiper: {
			el: '.agents__slider',
			slidesPerView: 4,
		}
	 }
});

document.querySelector('.header__burger-btn').addEventListener('click', () => {
	document.querySelector('.header').classList.toggle('active');
	document.querySelector('.header__burger-btn').classList.toggle('active');
	document.querySelector('.nav').classList.toggle('active');
	document.querySelector('.user__name').classList.remove('open');
})

document.querySelector('.nav').addEventListener('click', function (event) {
	let target = event.target;
	if (target.closest('.open')) {
		target.closest('.open').classList.remove('open');
	} else {
		[...document.querySelectorAll('.menu')].forEach((item) => {
			item.classList.remove('open');
		});
		target.closest('.menu').classList.add('open');
	}
})

document.querySelector('.user__name').addEventListener('click', function (event) {
	let target = event.target;
	let header = document.querySelector('.header');

	if (target.closest('.open')) {
		target.closest('.open').classList.remove('open');
	} else {
		[...document.querySelectorAll('.menu')].forEach((item) => {
			item.classList.remove('open');
		});
		[...header.querySelectorAll('.active')].forEach((item) => {
			item.classList.remove('active');
		});
		header.classList.remove('active');
		target.closest('.menu').classList.add('open');
	}
})

