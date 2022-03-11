import { useBlockProps, RichText } from '@wordpress/block-editor';

function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps({
		className: 'address',
	});
	const { content } = attributes;

	return (
		<address {...blockProps}>
			<RichText
				value={content}
				onChange={(newContent) =>
					setAttributes({ content: newContent })
				}
				allowedFormats={['core/bold', 'core/italic', 'core/link']}
			/>
		</address>
	);
}

export default Edit;
