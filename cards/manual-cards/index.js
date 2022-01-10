import { registerBlockStyle, registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';
import Edit from './_Edit';
import { __ } from '@wordpress/i18n';
import Save from './_Save';

registerBlockType('f1-block-library/manual-cards', {
	...metadata,
	edit: Edit,
	save: Save,
});

registerBlockStyle('f1-block-library/manual-cards', {
	name: 'feature',
	label: __('Feature'),
});
