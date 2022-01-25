import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import classnames from 'classnames';

function Save() {
	const blockProps = useBlockProps.save({
		className: classnames('l-section'),
	});
	return (
		<section {...blockProps}>
			<InnerBlocks.Content />
		</section>
	);
}

export default Save;
