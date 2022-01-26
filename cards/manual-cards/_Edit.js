import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import ColumnSettings from '../common/ColumnSettings';
import classnames from 'classnames';

function Edit({ attributes, setAttributes }) {
	const { columns } = attributes;
	const blockProps = useBlockProps({
		className: classnames('cards', `cards--columns-${columns}`),
	});
	const innerBlockProps = useInnerBlocksProps(blockProps, {
		allowedBlocks: ['f1-block-library/single-card'],
	});
	return (
		<>
			<ColumnSettings columns={columns} setAttributes={setAttributes} />
			<div {...innerBlockProps} />
		</>
	);
}

export default Edit;
