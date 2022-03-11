import { useBlockProps, RichText } from '@wordpress/block-editor';

function Save({ attributes }) {
	const blockProps = useBlockProps.save({
		className: 'address',
	});
	const { content } = attributes;
	return (
		<address {...blockProps}>
			<RichText.Content value={content} />
		</address>
	);
}

export default Save;
