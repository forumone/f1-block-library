import BackToTop from './_BackToTop';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps({
		className: 'back-to-top',
	});
	const { topElement, title } = attributes;
	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Back to Top Settings')}>
					<TextControl
						label={__('Top Element ID')}
						value={topElement}
						onChange={(newValue) => {
							setAttributes({ topElement: newValue });
						}}
					/>
					<TextControl
						label={__('Title')}
						value={title}
						onChange={(newValue) => {
							setAttributes({ title: newValue });
						}}
					/>
				</PanelBody>
			</InspectorControls>
			<BackToTop {...blockProps} topElement={topElement} title={title} />
		</>
	);
}
export default Edit;
