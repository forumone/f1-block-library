import domReady from '@wordpress/dom-ready';

domReady(() => {
	const megaMenu = document.querySelector('.mega-menu');
	if (megaMenu) {
		const headerHeight =
			megaMenu.parentElement.getBoundingClientRect().top +
			megaMenu.parentElement.getBoundingClientRect().height;
		document.documentElement.style.setProperty(
			'--mega-menu-header-height',
			`${headerHeight}px`
		);
	}
});
