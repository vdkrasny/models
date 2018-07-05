import $ from 'jquery';
import 'jquery-selectric';

function init() {
	$('select').selectric({
		responsive: true
	});
}

export default {
	init
};
