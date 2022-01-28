import { registerBlockType, registerTheme } from 'blockbook-cli/src/app/api';
import themeStyles from '!!raw-loader!../../../themes/wp-next-theme/dist/css/blockbook.css';

import '../accordion/accordion-editor.css';
import '../build/accordion';
import '../build/accordion-item';
import '../build/back-to-top';
import '../build/copyright';
import '../build/skiplinks';
import '../build/mega-menu';
import '../build/single-card';

// Themes
registerTheme({
	name: 'wp-next-theme',
	title: 'WP Next Theme',
	themeStyles,
});

// Blocks
const blocks = [
	'core/archives',
	'core/audio',
	'core/buttons',
	'core/calendar',
	'core/categories',
	'core/code',
	'core/columns',
	'core/cover',
	'core/embed',
	'core/file',
	'core/gallery',
	'core/group',
	'core/heading',
	'core/image',
	'core/latest-posts',
	'core/list',
	'core/media-text',
	'core/paragraph',
	'core/preformatted',
	'core/pullquote',
	'core/quote',
	'core/rss',
	'core/search',
	'core/separator',
	'core/social-links',
	'core/spacer',
	'core/table',
	'core/tag-cloud',
	'core/verse',
	'core/video',
	'f1-block-library/accordion',
	'f1-block-library/back-to-top',
	'f1-block-library/copyright',
	'f1-block-library/skiplinks',
	'f1-block-library/mega-menu',
	'f1-block-library/single-card',
];
blocks.forEach((block) => registerBlockType(block));
