import { useBlockProps, InnerBlocks, RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

function Edit({ attributes, setAttributes, clientId }) {
	const blockProps = useBlockProps({
		className: 'accordion__item',
	});
	const { title, blockId } = attributes;
	if (!blockId) {
		setAttributes({ blockId: `accordion-item-${clientId}` });
	}
	return (
		<div {...blockProps} id={blockId}>
			<h3 className="accordion__heading">
				<RichText
					className="accordion__toggle"
					identifier="title"
					aria-label={__('Panel Title')}
					placeholder={__('Title')}
					value={title}
					onChange={(newTitle) => setAttributes({ title: newTitle })}
				/>
				<span className="accordion__icon" />
			</h3>
			<div className="accordion__drawer">
				<div className="accordion__drawer-inner">
					<InnerBlocks />
				</div>
			</div>
		</div>
	);
}

export default Edit;
