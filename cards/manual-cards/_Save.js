import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import classnames from 'classnames';

function Save({ attributes }) {
	const blockProps = useBlockProps.save();
	const { columns } = attributes;
	return (
		<div
			{...blockProps}
			className={classnames(
				blockProps.className,
				'cards',
				`cards--columns-${columns}`
			)}
		>
			<InnerBlocks.Content />
		</div>
	);
}

export default Save;
