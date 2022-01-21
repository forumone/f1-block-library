import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';
import Edit from './_Edit';
import Save from './_Save';

import './standalone-link.scss';

registerBlockType('f1-block-library/standalone-link', {
	...metadata,
	edit: Edit,
	save: Save,
});
