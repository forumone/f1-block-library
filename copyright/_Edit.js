import { useBlockProps, RichText } from '@wordpress/block-editor';
import classnames from 'classnames';

function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps();
	const { copyrightText } = attributes;
	return (
		<div
			{...blockProps}
			className={classnames(blockProps.className, 'copyright')}
		>
			&copy;{new Date().getFullYear()}{' '}
			<RichText
				identifier="copyrightText"
				value={copyrightText}
				onChange={(newValue) =>
					setAttributes({ copyrightText: newValue })
				}
				tagName="span"
				placeholder="Your Site Name"
				allowedFormats={['core/bold', 'core/italic', 'core/link']}
			/>
		</div>
	);
}

export default Edit;
