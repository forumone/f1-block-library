import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';
import Edit from './_Edit';
import Save from './_Save';

import './mega-menu.scss';

registerBlockType('f1-block-library/mega-menu', {
	...metadata,
	edit: Edit,
	save: Save,
});
