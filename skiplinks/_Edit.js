import { useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';
import { __ } from '@wordpress/i18n';

function Edit() {
	const blockProps = useBlockProps();
	return (
		<div
			{...blockProps}
			className={classnames(blockProps.className, 'skiplinks')}
		>
			<a href="#main" className="skiplinks__link">
				{__('Skip to main content')}
			</a>
		</div>
	);
}

export default Edit;
