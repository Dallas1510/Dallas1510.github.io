// --------------Sliders-----------------
new Swiper(".preview-slider", {
	loop: true,
	slidesPerView: 1,
	spaceBetween: 0,
	slideToClickedSlide: true,
	thumbs: {
		swiper: {
			el: '.mini-preview-slider',
			loop: true,
			slidesPerView: 2,
			spaceBetween: 15,
			slideToClickedSlide: true,
			centeredSlides: true,
			initialSlide: 1,
			breakpoints: {
				501: {
					slidesPerView: 3,
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
			},
		},
	},
});
new Swiper(".more-goods__swiper", {
	slidesPerView: 1,
	loop: true,
	breakpoints: {
		425: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 3,
		},
	}
});
// ------------Search------------
document.getElementById('nav__search').onclick = function () {
	document.getElementById('nav__form').classList.toggle('active');
};
// ----------Burger-----------
document.getElementById('burger__btn').onclick = function () {
	document.getElementById('burger__btn').classList.toggle('active'),
		document.getElementById('burger').classList.toggle('active'),
		document.getElementById('lock').classList.toggle('lock');
};
// --------------Tabs--------------
function openCategory(evt, categoryName) {
	var i, tabs__content, tabs__btn;
	tabs__content = document.getElementsByClassName("tabs__content");
	for (i = 0; i < tabs__content.length; i++) {
		tabs__content[i].style.display = "none";
	}
	tabs__btn = document.getElementsByClassName("tabs__btn");
	for (i = 0; i < tabs__btn.length; i++) {
		tabs__btn[i].className = tabs__btn[i].className.replace(" active", "");
	}
	document.getElementById(categoryName).style.display = "flex";
	evt.currentTarget.className += " active";
};
// ---------Filter--------------
const dropDownBtns = document.querySelectorAll('.dropdown__btn');
const dropDowns = document.querySelectorAll('.filter__dropdown');

const removeAllActive = () => {
	return dropDowns.forEach(item => item.classList.remove('active'));
};

dropDownBtns.forEach(btn => {
	btn.addEventListener('click', async (e) => {
		await removeAllActive();
		e.target.parentNode.classList.add('active')
	});
});
// -------------ReadFull----------------
document.getElementById('more').onclick = function () {
	document.getElementById('full-text').classList.toggle('fulltext');
};
// ------------ShowMore--------------
document.getElementById('show-more').onclick = function () {
	document.getElementById('full-height').classList.add('more');
};
