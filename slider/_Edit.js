import {
	useBlockProps,
	useInnerBlocksProps,
	store as blockEditorStore,
	InspectorControls,
} from '@wordpress/block-editor';
import { useDispatch, useSelect } from '@wordpress/data';
import { useEffect, useMemo } from '@wordpress/element';
/* eslint-disable @wordpress/no-unsafe-wp-apis */
import {
	PanelBody,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
	RangeControl,
	ToggleControl,
} from '@wordpress/components';
/* eslint-enable @wordpress/no-unsafe-wp-apis */
import { __ } from '@wordpress/i18n';

function Edit({ clientId, attributes, setAttributes }) {
	const { mode, items, slideBy, controls, nav } = attributes;
	const blockProps = useBlockProps({
		className: 'slider',
		'data-mode': mode,
		'data-items': items,
		'data-slide-by': slideBy,
		'data-controls': controls,
		'data-nav': nav,
	});
	const innerBlockProps = useInnerBlocksProps(blockProps, {
		allowedBlocks: ['core/group'],
		template: [['core/group', {}, [['core/image', {}]]]],
	});
	const innerBlocks = useSelect(
		(select) => {
			return select(blockEditorStore).getBlock(clientId)?.innerBlocks;
		},
		[clientId]
	);
	const { updateBlockAttributes } = useDispatch(blockEditorStore);
	const newSlides = useMemo(() => {
		return innerBlocks.filter(
			(slide) => slide.className !== 'slider__slide'
		);
	}, [innerBlocks]);
	useEffect(() => {
		newSlides?.forEach((newBlock) => {
			updateBlockAttributes(newBlock.clientId, {
				className: 'slider__slide',
			});
		});
	}, [newSlides]);
	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Slider Settings')}>
					<ToggleGroupControl
						label={__('Mode')}
						value={mode}
						onChange={(newMode) => setAttributes({ mode: newMode })}
					>
						<ToggleGroupControlOption
							value="carousel"
							label={__('Carousel')}
						/>
						<ToggleGroupControlOption
							value="gallery"
							label={__('Gallery')}
						/>
					</ToggleGroupControl>
					<RangeControl
						label={__('Number of slides to show at once')}
						value={parseInt(items, 10)}
						min={1}
						onChange={(newItems) =>
							setAttributes({ items: newItems.toString() })
						}
					/>
					<RangeControl
						label={__('Number of slides to advance per click')}
						value={parseInt(items, 10)}
						min={1}
						onChange={(newSlideBy) =>
							setAttributes({ slideBy: newSlideBy.toString() })
						}
					/>
					<ToggleControl
						label={__('Show previous/next controls')}
						checked={controls !== 'false'}
						onChange={(checked) =>
							setAttributes({
								controls: checked ? 'true' : 'false',
							})
						}
					/>
					<ToggleControl
						label={__('Show pagination dots')}
						checked={nav !== 'false'}
						onChange={(checked) =>
							setAttributes({
								nav: checked ? 'true' : 'false',
							})
						}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...innerBlockProps} />
		</>
	);
}
export default Edit;
