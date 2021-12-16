import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';
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
				<div className="accordion__toggle">
					<TextControl
						label={__('Panel Title')}
						value={title}
						onChange={(newTitle) =>
							setAttributes({ title: newTitle })
						}
					/>
				</div>
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
