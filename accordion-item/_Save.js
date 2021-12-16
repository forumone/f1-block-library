import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import classnames from 'classnames';

function Save({ attributes }) {
	const blockProps = useBlockProps.save();
	const { title, blockId } = attributes;
	const buttonId = `${blockId}-button`;
	const drawerId = `${blockId}-drawer`;
	return (
		<div
			{...blockProps}
			className={classnames(blockProps.className, 'accordion__item')}
			id={blockId}
		>
			<h3 className="accordion__heading">
				<button
					className={classnames(
						'accordion__toggle',
						'js-accordion-toggle'
					)}
					id={buttonId}
					aria-controls={drawerId}
					aria-expanded="false"
				>
					{title}
					<span className="accordion__icon" />
				</button>
			</h3>
			<div
				className="accordion__drawer"
				id={drawerId}
				aria-labelledby={buttonId}
				aria-hidden="true"
			>
				<div className="accordion__drawer-inner">
					<InnerBlocks.Content />
				</div>
			</div>
		</div>
	);
}

export default Save;
