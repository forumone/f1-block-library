import { useBlockProps } from '@wordpress/block-editor';
import ServerSideRender from '@wordpress/server-side-render';
import ColumnSettings from '../common/ColumnSettings';

function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps();
	const { columns } = attributes;
	return (
		<>
			<ColumnSettings columns={columns} setAttributes={setAttributes} />
			<div {...blockProps}>
				<ServerSideRender
					block="f1-block-library/query-cards"
					attributes={attributes}
				/>
			</div>
		</>
	);
}

export default Edit;
