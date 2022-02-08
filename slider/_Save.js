import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

function Save({ attributes }) {
	const { mode, items, slideBy, controls, nav } = attributes;
	const blockProps = useBlockProps.save({
		className: 'slider',
		'data-mode': mode,
		'data-items': items,
		'data-slide-by': slideBy,
		'data-controls': controls,
		'data-nav': nav,
	});
	const innerBlockProps = useInnerBlocksProps.save(blockProps);
	return <div {...innerBlockProps} />;
}

export default Save;
