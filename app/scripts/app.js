import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import selectric from '../blocks/include/selectric/selectric';
import page from '../blocks/widgets/page/page';
import cardProject from '../blocks/widgets/card-project/card-project';
import rangeslider from '../blocks/include/ion-rangeslider/ion-rangeslider';
import chat from '../blocks/widgets/chat-dialog/chat';
// import swiper from '../blocks/include/swiper/swiper';
// import slick from '../blocks/include/slick/slick';
import thumbsButtons from '../blocks/ui/thumbs-buttons/thumbs-buttons';
import switcherChoice from '../blocks/ui/switcher-choice/switcher-choice';
import widgetTabs from '../blocks/ui/widget-tabs/widget-tabs';
import 'remodal';

$(() => {
	svg4everybody();
	selectric.init();
	page.init();
	cardProject.init();
	// swiper.init();
	// slick.init();
	chat.init();
	rangeslider.init();
	thumbsButtons.init();
	switcherChoice.init();
	widgetTabs.init();
});
