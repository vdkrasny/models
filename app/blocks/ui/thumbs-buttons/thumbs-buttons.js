import $ from 'jquery';
const stateChose = 'is-chose';

function init() {
	$('.thumbs-buttons__item').on('click', function (event) {
		$('.thumbs-buttons__item').removeClass(stateChose);
		$(this).addClass(stateChose);
		event.preventDefault();
		console.log(1);
	});
}

export default {
	init
};
