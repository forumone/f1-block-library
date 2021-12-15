import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';
import Edit from './_Edit';
import Save from './_Save';

registerBlockType('f1-block-library/accordion-item', {
	...metadata,
	edit: Edit,
	save: Save,
});
