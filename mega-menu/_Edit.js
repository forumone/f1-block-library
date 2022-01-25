import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

function Edit() {
	const blockProps = useBlockProps({
		className: 'mega-menu',
	});
	return (
		<div {...blockProps}>
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
