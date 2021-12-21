import { useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';
import { __ } from '@wordpress/i18n';

function Save() {
	const blockProps = useBlockProps.save();
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

export default Save;
