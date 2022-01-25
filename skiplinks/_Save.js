import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

function Save() {
	const blockProps = useBlockProps.save({
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

export default Save;
