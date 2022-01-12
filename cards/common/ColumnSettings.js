import { Panel, PanelBody, RangeControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';

function ColumnSettings({ columns, setAttributes }) {
	return (
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
	);
}

export default ColumnSettings;
