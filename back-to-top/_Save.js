import { useBlockProps } from '@wordpress/block-editor';
import BackToTop from './_BackToTop';

function Save({ attributes }) {
	const { topElement, title } = attributes;
	const blockProps = useBlockProps.save({
		className: 'back-to-top',
	});
	return <BackToTop {...blockProps} topElement={topElement} title={title} />;
}

export default Save;
