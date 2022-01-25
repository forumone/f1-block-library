import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import classnames from 'classnames';

function Save({ attributes }) {
	const blockProps = useBlockProps.save({
		className: classnames('accordion', 'js-accordion'),
	});
	const { allowToggle, allowMultiple } = attributes;

	return (
		<div
			{...blockProps}
			data-allow-multiple={allowMultiple}
			data-allow-toggle={allowToggle}
		>
			<InnerBlocks.Content />
		</div>
	);
}

export default Save;
