import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';
import Edit from './_Edit';
import Save from './_Save';

import './back-to-top.scss';

registerBlockType('f1-block-library/back-to-top', {
	...metadata,
	edit: Edit,
	save: Save,
});
