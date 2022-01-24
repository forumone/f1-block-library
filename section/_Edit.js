import {
	useBlockProps,
	InnerBlocks,
	store,
	useSetting,
	useInnerBlocksProps,
} from '@wordpress/block-editor';
import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';

function Edit({ attributes, clientId }) {
	const hasLayoutSupport = useSelect(
		(select) => {
			const { getSettings } = select(store);
			return getSettings()?.supportsLayout;
		},
		[clientId]
	);
	const defaultLayout = useSetting('layout') || {};
	const { layout = {} } = attributes;
	const layoutInUse = !!layout && layout.inherit ? defaultLayout : layout;
	const { type = 'default' } = layoutInUse;
	const layoutSupportEnabled = hasLayoutSupport || type !== 'default';
	const blockProps = useBlockProps({
		className: classnames('l-section'),
	});
	const innerBlockProps = useInnerBlocksProps(
		layoutSupportEnabled ? blockProps : undefined,
		{
			__experimentalLayout: layoutSupportEnabled
				? layoutInUse
				: undefined,
		}
	);
	const propsToUse = layoutSupportEnabled ? innerBlockProps : blockProps;
	return (
		<section {...propsToUse}>
			<InnerBlocks
				template={[
					[
						'core/columns',
						{ align: 'wide' },
						[
							[
								'core/column',
								{ width: 70 },
								[
									[
										'core/heading',
										{
											level: 2,
											placeholder: __('Section Title…'),
										},
									],
								],
							],
							[
								'core/column',
								{ width: 30 },
								[['f1-block-library/standalone-link']],
							],
						],
					],
				]}
			/>
		</section>
	);
}

export default Edit;
