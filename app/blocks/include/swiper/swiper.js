import Swiper from 'swiper';

function init() {
	new Swiper('#sss .swiper-container', { // eslint-disable-line
		slidesPerView: 5,
		freeMode: false,
		loop: true,
		navigation: {
			nextEl: '#sss .widget-slider__control-next',
			prevEl: '#sss .widget-slider__control-prev'
		}
	});
	new Swiper('.swiper-container.dfsdf', { // eslint-disable-line
		slidesPerView: 1,
		freeMode: true,
		loop: true,
		pagination: {
			el: '.swiper-pagination',
			dynamicBullets: true
		}
	});
}

export default {
	init
};
