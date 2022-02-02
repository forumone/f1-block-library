import {
	useBlockProps,
	useInnerBlocksProps,
	store as blockEditorStore,
} from '@wordpress/block-editor';
import { useDispatch, useSelect } from '@wordpress/data';
import { useEffect, useMemo } from '@wordpress/element';

function Edit({ clientId }) {
	const blockProps = useBlockProps({
		className: 'slider',
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
	return <div {...innerBlockProps} />;
}
export default Edit;
