import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import classnames from 'classnames';

function Save({ attributes }) {
	const blockProps = useBlockProps.save();
	const { allowToggle, allowMultiple } = attributes;

	return (
		<div
			{...blockProps}
			className={classnames(
				blockProps.className,
				'accordion',
				'js-accordion'
			)}
			data-allow-multiple={allowMultiple}
			data-allow-toggle={allowToggle}
		>
			<InnerBlocks.Content />
		</div>
	);
}

export default Save;
