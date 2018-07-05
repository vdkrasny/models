import $ from 'jquery';
import {BREAKPOINTS}from '../../../scripts/constants';

const $page = $('.page');
const guideStateOpen = 'is-guide-open';
const $guideControl = $('.guide-control');
const guideControlStateOpen = 'is-active';

function screenSize() {
	if ($(window).width() < BREAKPOINTS.xxl) {
		$page.removeClass(guideStateOpen);
		$guideControl.removeClass(guideControlStateOpen);
	}
	else {
		$page.addClass(guideStateOpen);
		$guideControl.addClass(guideControlStateOpen);
	}
}

function init() {
	screenSize();
	$guideControl.on('click', function (event) {
		if ($page.hasClass(guideStateOpen)) {
			$page.removeClass(guideStateOpen);
			$(this).removeClass(guideControlStateOpen);
		}
		else {
			$page.addClass(guideStateOpen);
			$(this).addClass(guideControlStateOpen);
		}
		event.preventDefault();
	});
}

export default {
	init
};
