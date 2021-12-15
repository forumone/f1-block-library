import { registerBlockType } from '@wordpress/blocks';
import Edit from './_Edit';
import Save from './_Save';
import metadata from './block.json';

import './accordion.scss';
import './accordion-editor.scss';

registerBlockType('f1-block-library/accordion', {
	...metadata,
	edit: Edit,
	save: Save,
});
