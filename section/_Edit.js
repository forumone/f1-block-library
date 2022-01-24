import {
	useBlockProps,
	InnerBlocks,
	store,
	useSetting,
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
	return (
		<section {...blockProps}>
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
				__experimentalLayout={
					layoutSupportEnabled ? layoutInUse : undefined
				}
			/>
		</section>
	);
}

export default Edit;
