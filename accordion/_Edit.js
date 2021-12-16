import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
} from '@wordpress/block-editor';
import classnames from 'classnames';
import { PanelBody, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps();
	const { allowToggle, allowMultiple } = attributes;
	return (
		<>
			<InspectorControls>
				<PanelBody>
					<ToggleControl
						label={__('Allow multiple')}
						help={__(
							'Allow multiple accordion drawers to be open at the same time.'
						)}
						checked={allowMultiple}
						onChange={() =>
							setAttributes({
								allowMultiple: !allowMultiple,
							})
						}
					/>
					<ToggleControl
						label={__('Allow toggle')}
						help={__('Allow toggling a drawer open and closed.')}
						checked={allowToggle}
						onChange={() =>
							setAttributes({
								allowToggle: !allowToggle,
							})
						}
					/>
				</PanelBody>
			</InspectorControls>
			<div
				{...blockProps}
				className={classnames(blockProps.className, 'accordion')}
			>
				<InnerBlocks
					allowedBlocks={['f1-block-library/accordion-item']}
					template={[['f1-block-library/accordion-item', {}]]}
				/>
			</div>
		</>
	);
}

export default Edit;
