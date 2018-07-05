import $ from 'jquery';
import 'ion-rangeslider';

function init() {
	const $range = $('.irs-box__js-init');

	$range.ionRangeSlider({
		type: 'single',
		min: 0,
		max: 10,
		step: 1,
		from: 10
	});

	$range.on('change', function () {
		const value = $(this).prop('value');
		const inputId = $(this).data('irs-get-value-for');
		$(inputId).find('input').val(value);
	});
}

export default {
	init
};
