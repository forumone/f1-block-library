import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

function Edit() {
	const blockProps = useBlockProps({
		className: 'skiplinks',
	});
	return (
		<div {...blockProps}>
			<a href="#main" className="skiplinks__link">
				{__('Skip to main content')}
			</a>
		</div>
	);
}

export default Edit;
