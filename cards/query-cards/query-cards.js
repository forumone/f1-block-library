import { registerBlockStyle, registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';
import Edit from './_Edit';
import { __ } from '@wordpress/i18n';

import '../../common/_readmore-link.scss';
import '../cards.scss';

registerBlockType('f1-block-library/query-cards', {
	...metadata,
	edit: Edit,
});

registerBlockStyle('f1-block-library/query-cards', {
	name: 'feature',
	label: __('Feature'),
});
