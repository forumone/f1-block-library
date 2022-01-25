import { useBlockProps, RichText } from '@wordpress/block-editor';

function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps({
		className: 'copyright',
	});
	const { copyrightText } = attributes;
	return (
		<div {...blockProps}>
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
