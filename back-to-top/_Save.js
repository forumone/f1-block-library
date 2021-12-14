import { useBlockProps } from '@wordpress/block-editor';
import BackToTop from './_BackToTop';
import classnames from 'classnames';

function Save({ attributes }) {
	const { topElement, title } = attributes;
	const blockProps = useBlockProps.save();
	return (
		<BackToTop
			{...blockProps}
			className={classnames(blockProps.className, 'back-to-top')}
			topElement={topElement}
			title={title}
		/>
	);
}

export default Save;
