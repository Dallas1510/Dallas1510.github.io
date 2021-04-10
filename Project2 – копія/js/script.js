$(document).ready(function () {
	$('.burg__btn').click(function (event) {
		$('.nav__menu').toggleClass('active');
	})
});
$(document).ready(function () {
	$('.burg__btn').click(function (event) {
		$('.header__title').toggleClass('active');
	})
});

new Swiper('.swiper-container', {
	navigation: {
		nextEl: '.swiper-next',
		prevEl: '.swiper-prev',
	},
	loop: true,
});