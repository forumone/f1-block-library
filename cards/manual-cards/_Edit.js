import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import ColumnSettings from '../common/ColumnSettings';
import classnames from 'classnames';

function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps();
	const { columns } = attributes;
	return (
		<>
			<ColumnSettings columns={columns} setAttributes={setAttributes} />
			<div
				{...blockProps}
				className={classnames(
					blockProps.className,
					'cards',
					`cards--columns-${columns}`
				)}
			>
				<InnerBlocks allowedBlocks={['f1-block-library/single-card']} />
			</div>
		</>
	);
}

export default Edit;
