import $ from 'jquery';
import {BREAKPOINTS}from '../../../scripts/constants';

const $dialogId = $('#chat-dialog');
const $chatId = $('#chat-history');
const $dialog = $('.chat-dialog__item');
const $chatControls = $('#chat-controls');
const $btnOpenDialog = $('#chat-controls-open-dialog');

function checkWidth() {
	if ($(window).width() < BREAKPOINTS.lg) {
		$chatControls.show();
		if ($dialogId.hasClass('history-open')) {
			$dialogId.hide();
		}
		else {
			$chatId.hide();
		}
		$dialog.on('click', function () {
			$dialogId.addClass('history-open').hide();
			$chatId.show();
		});
		$btnOpenDialog.on('click', function () {
			$dialogId.removeClass('history-open').show();
			$chatId.hide();
		});
	}
	else {
		$dialogId.show();
		$chatId.show();
		$chatControls.hide();
	}
}

function init() {
	checkWidth();
	$(window).resize(checkWidth);
}

export default {
	init
};
