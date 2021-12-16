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
			data-allow-multiple={allowMultiple ? 'true' : null}
			data-allow-toggle={allowToggle ? 'true' : null}
		>
			<InnerBlocks.Content />
		</div>
	);
}

export default Save;
