import { useBlockProps, RichText } from '@wordpress/block-editor';
import classnames from 'classnames';

function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps();
	const { copyright_text } = attributes;
	return (
		<div
			{...blockProps}
			className={classnames(blockProps.className, 'copyright')}
		>
			&copy;{new Date().getFullYear()}{' '}
			<RichText
				identifier="copyright_text"
				value={copyright_text}
				onChange={(newValue) =>
					setAttributes({ copyright_text: newValue })
				}
				tagName="span"
				placeholder="Your Site Name"
				allowedFormats={['core/bold', 'core/italic', 'core/link']}
			/>
		</div>
	);
}

export default Edit;
