import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';
import Edit from './_Edit';

import '../cards.scss';

registerBlockType('f1-block-library/query-cards', {
	...metadata,
	edit: Edit,
});
