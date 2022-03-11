import { registerBlockType } from '@wordpress/blocks';
import Edit from './_Edit';
import Save from './_Save';
import metadata from './block.json';

registerBlockType('f1-block-library/address', {
	...metadata,
	edit: Edit,
	save: Save,
});
