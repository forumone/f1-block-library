import { useBlockProps } from '@wordpress/block-editor';
import ServerSideRender from '@wordpress/server-side-render';

function Edit({ attributes }) {
	const blockProps = useBlockProps();
	return (
		<div {...blockProps}>
			<ServerSideRender
				block="f1-block-library/query-card"
				attributes={attributes}
			/>
		</div>
	);
}

export default Edit;
