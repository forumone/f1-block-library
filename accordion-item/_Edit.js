import { useBlockProps, InnerBlocks, RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';

function Edit({ attributes, setAttributes, clientId }) {
	const blockProps = useBlockProps();
	const { title, blockId } = attributes;
	if (!blockId) {
		setAttributes({ blockId: `accordion-item-${clientId}` });
	}
	return (
		<div
			{...blockProps}
			className={classnames(blockProps.className, 'accordion__item')}
			id={blockId}
		>
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
