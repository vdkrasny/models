import $ from 'jquery';

const $btn = $('.widget-tabs__nav-item');
const $content = $('.widget-tabs__content');
const activeClass = 'is-current';

function init() {
	$content.not(':first').hide();
	$btn.on('click', function () {
		$btn.removeClass(activeClass).eq($(this).index()).addClass(activeClass);
		$content.hide().eq($(this).index()).fadeIn();
	}).eq(0).addClass(activeClass);
}

export default {
	init
};
