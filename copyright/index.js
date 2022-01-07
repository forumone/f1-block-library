import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';
import Edit from './_Edit';

registerBlockType('f1-block-library/copyright', {
	...metadata,
	edit: Edit,
});
