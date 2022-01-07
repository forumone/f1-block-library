import { registerBlockType } from '@wordpress/blocks';
import Edit from './_Edit';
import Save from './_Save';
import metadata from './block.json';

import './accordion.scss';

registerBlockType('f1-block-library/accordion', {
	...metadata,
	edit: Edit,
	save: Save,
	example: {
		innerBlocks: [
			{
				name: 'f1-block-library/accordion-item',
				attributes: {
					title: 'Accordion Item Title',
					blockId: 'accordion-item-1',
				},
				innerBlocks: [
					{
						name: 'core/paragraph',
						attributes: {
							content: 'Lorem ipsum',
						},
					},
				],
			},
		],
	},
});
