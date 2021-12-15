import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';

function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps();
	const { title } = attributes;
	return (
		<div
			{...blockProps}
			className={classnames(blockProps.className, 'accordion__item')}
		>
			<h3 className="accordion__heading">
				<span className="accordion__toggle">
					<TextControl
						label={__('Panel Title')}
						value={title}
						onChange={(newTitle) =>
							setAttributes({ title: newTitle })
						}
					/>
				</span>
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
