import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

function Save() {
	const blockProps = useBlockProps.save({
		className: 'mega-menu',
	});

	return (
		<div {...blockProps}>
			<InnerBlocks.Content />
		</div>
	);
}

export default Save;
