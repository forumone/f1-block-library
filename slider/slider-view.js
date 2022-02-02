import './slider-view.scss';
import { tns } from 'tiny-slider';
import domReady from '@wordpress/dom-ready';

domReady(() => {
	tns({
		container: '.slider',
	});
});
