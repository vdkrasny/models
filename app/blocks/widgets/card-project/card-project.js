import $ from 'jquery';
const stateOpen = 'show-more-content';

function init() {
	$('.card-project__btn-more').on('click', function (event) {
		const $usedCard = $(this).parents('.card-project');

		if ($usedCard.hasClass(stateOpen)) {
			$usedCard.removeClass(stateOpen);
		}
		else {
			$usedCard.addClass(stateOpen);
		}
		event.preventDefault();
	});
}

export default {
	init
};
