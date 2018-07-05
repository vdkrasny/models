import $ from 'jquery';
import 'slick-carousel';
import {BREAKPOINTS}from '../../../scripts/constants';

function init() {
	const slick1 = '#slick-main-faces-1';
	const slick1B = slick1 + ' .widget-slider__body';
	const slick1Pv = slick1 + ' .widget-slider__control-prev';
	const slick1Nt = slick1 + ' .widget-slider__control-next';
	$(slick1B).slick({
		rows: 0,
		slidesToShow: 5,
		slidesToScroll: 1,
		prevArrow: slick1Pv,
		nextArrow: slick1Nt,
		swipeToSlide: true,
		adaptiveHeight: true,
		responsive: [
			{
				breakpoint: BREAKPOINTS.lg,
				settings: {
					slidesToShow: 4
				}
			},
			{
				breakpoint: BREAKPOINTS.md,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: BREAKPOINTS.sm,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: BREAKPOINTS.xs,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
}

export default {
	init
};
