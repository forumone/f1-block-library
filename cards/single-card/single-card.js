import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';
import Edit from './_Edit';

registerBlockType('f1-block-library/single-card', {
	...metadata,
	edit: Edit,
});
