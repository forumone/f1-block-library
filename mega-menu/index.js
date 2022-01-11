import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';
import Edit from './_Edit';
import Save from './_Save';

import './mega-menu.scss';

registerBlockType('f1-block-library/mega-menu', {
	...metadata,
	edit: Edit,
	save: Save,
	example: {
		innerBlocks: [
			{
				name: 'core/navigation',
				innerBlocks: [
					{
						name: 'core/navigation-submenu',
						attributes: {
							isTopLevelItem: true,
							url: '#0',
							label: 'Visit',
						},
						innerBlocks: [
							{
								name: 'core/navigation-link',
								attributes: {
									url: '#0',
									label: 'Submenu Item One',
								},
							},
							{
								name: 'core/navigation-link',
								attributes: {
									url: '#0',
									label: 'Submenu Item Two',
								},
							},
							{
								name: 'core/navigation-link',
								attributes: {
									url: '#0',
									label: 'Submenu Item Three',
								},
							},
							{
								name: 'core/navigation-link',
								attributes: {
									url: '#0',
									label: 'Submenu Item Four',
								},
							},
						],
					},
					{
						name: 'core/navigation-submenu',
						attributes: {
							isTopLevelItem: true,
							url: '#0',
							label: 'About',
						},
						innerBlocks: [
							{
								name: 'core/navigation-link',
								attributes: {
									url: '#0',
									label: 'Submenu Item One',
								},
							},
							{
								name: 'core/navigation-link',
								attributes: {
									url: '#0',
									label: 'Submenu Item Two',
								},
							},
						],
					},
					{
						name: 'core/navigation-submenu',
						attributes: {
							isTopLevelItem: true,
							url: '#0',
							label: 'Resources',
						},
						innerBlocks: [
							{
								name: 'core/navigation-link',
								attributes: {
									url: '#0',
									label: 'Submenu Item One',
								},
							},
							{
								name: 'core/navigation-link',
								attributes: {
									url: '#0',
									label: 'Submenu Item Two',
								},
							},
							{
								name: 'core/navigation-link',
								attributes: {
									url: '#0',
									label: 'Submenu Item Three',
								},
							},
							{
								name: 'core/navigation-link',
								attributes: {
									url: '#0',
									label: 'Submenu Item Four',
								},
							},
						],
					},
					{
						name: 'core/navigation-link',
						attributes: {
							url: '#0',
							label: 'Get Involved',
						},
					},
				],
			},
		],
	},
});
