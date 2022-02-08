import './slider-view.scss';
import { tns } from 'tiny-slider';
import domReady from '@wordpress/dom-ready';

domReady(() => {
	const sliders = document.querySelectorAll('.slider');
	sliders.forEach((slider) => {
		tns({
			container: slider,
			mode: slider.dataset.mode || 'carousel',
			items: parseInt(slider.dataset.items, 10) || 1,
			slideBy: parseInt(slider.dataset.slideBy, 10) || 1,
			controls: slider.dataset.controls !== 'false',
			nav: slider.dataset.nav !== 'false',
		});
	});
});
