import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import classnames from 'classnames';

function Save() {
	const blockProps = useBlockProps.save();

	return (
		<div
			{...blockProps}
			className={classnames(blockProps.className, 'accordion')}
		>
			<InnerBlocks.Content />
		</div>
	);
}

export default Save;
