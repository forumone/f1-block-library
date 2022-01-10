import { registerBlockStyle, registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';
import Edit from './_Edit';
import { __ } from '@wordpress/i18n';

registerBlockType('f1-block-library/single-card', {
	...metadata,
	edit: Edit,
});

registerBlockStyle('f1-block-library/single-card', {
	name: 'feature',
	label: __('Feature'),
});
