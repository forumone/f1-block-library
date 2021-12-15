import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import classnames from 'classnames';

function Edit() {
	const blockProps = useBlockProps();
	return (
		<div
			{...blockProps}
			className={classnames(blockProps.className, 'accordion')}
		>
			<InnerBlocks
				allowedBlocks={['f1-block-library/accordion-item']}
				template={[['f1-block-library/accordion-item', {}]]}
			/>
		</div>
	);
}

export default Edit;
