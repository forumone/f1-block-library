import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import classnames from 'classnames';

function Edit() {
	const blockProps = useBlockProps();
	return (
		<div
			{...blockProps}
			className={classnames(blockProps.className, 'mega-menu')}
		>
			<InnerBlocks
				allowedBlocks={['core/navigation']}
				template={[
					[
						'core/navigation',
						{
							overlayMenu: 'mobile',
							openSubmenusOnClick: true,
							layout: {
								orientation: 'horizontal',
								flexWrap: 'nowrap',
							},
						},
					],
				]}
			/>
		</div>
	);
}

export default Edit;
