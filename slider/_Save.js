import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

function Save() {
	const blockProps = useBlockProps.save({
		className: 'slider',
	});
	const innerBlockProps = useInnerBlocksProps.save(blockProps);
	return <div {...innerBlockProps} />;
}

export default Save;
