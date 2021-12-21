import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import ServerSideRender from '@wordpress/server-side-render';
import { Panel, PanelBody, RangeControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps();
	const { columns } = attributes;
	return (
		<>
			<InspectorControls>
				<Panel>
					<PanelBody title={__('Cards Settings')}>
						<RangeControl
							label={__('Columns')}
							min={1}
							max={4}
							value={columns}
							onChange={(newValue) =>
								setAttributes({ columns: newValue })
							}
						/>
					</PanelBody>
				</Panel>
			</InspectorControls>
			<div {...blockProps}>
				<ServerSideRender
					block="f1-block-library/query-card"
					attributes={attributes}
				/>
			</div>
		</>
	);
}

export default Edit;
