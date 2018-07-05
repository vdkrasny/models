import $ from 'jquery';

// const $element = $('.switcher-choice');
const $input = $('.switcher-choice__input');

function getAttrAndChange($thisInput, sideClass) {
	const $parent = $thisInput.parent();
	const icon = $parent.find(sideClass).attr('data-switcher-choice-icon-url');
	$parent.find('.switcher-choice__styled-icon').css(
		{
			backgroundImage: 'url(' + icon + ')'
		}
	);
}

function init() {
	$input.change(function () {
		if ($(this).is(':checked')) {
			getAttrAndChange($(this), '.switcher-choice__side-right');
		}
		else {
			getAttrAndChange($(this), '.switcher-choice__side-left');
		}
	});
}

export default {
	init
};
