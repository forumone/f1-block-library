import {
	InspectorControls,
	useBlockProps,
	RichText,
	BlockControls,
	AlignmentControl,
	// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
	__experimentalLinkControl as LinkControl,
} from '@wordpress/block-editor';
import {
	PanelBody,
	Popover,
	TextControl,
	ToolbarButton,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import { useEffect, useState } from '@wordpress/element';
import { link, linkOff } from '@wordpress/icons';

function Edit({ attributes, setAttributes, isSelected }) {
	const { accessibleLabel, text, align, linkTarget, url } = attributes;
	const blockProps = useBlockProps({
		className: classnames({
			[`has-text-align-${align}`]: align,
		}),
	});
	const [isEditingUrl, setIsEditingUrl] = useState(false);
	const isUrlSet = !!url;
	const opensInNewTab = linkTarget === '_blank';
	const startEditing = (event) => {
		event.preventDefault();
		setIsEditingUrl(true);
	};
	const setLinkText = (newText) => {
		// Remove anchor tags from link text content.
		// @see core/button
		setAttributes({ text: newText.replace(/<\/?a[^>]*>/g, '') });
	};
	const setOpensInNewTab = (newValue) => {
		const newLinkTarget = newValue ? '_blank' : null;
		const newRel = newValue ? 'noreferrer noopener' : null;
		setAttributes({
			linkTarget: newLinkTarget,
			rel: newRel,
		});
	};
	const unlink = () => {
		setAttributes({
			url: null,
			linkTarget: null,
			rel: null,
		});
		setIsEditingUrl(false);
	};

	useEffect(() => {
		if (!isSelected) {
			setIsEditingUrl(false);
		}
	}, [isSelected]);

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Link Settings')}>
					<TextControl
						label={__('Accessible label')}
						value={accessibleLabel}
						onChange={(newValue) =>
							setAttributes({ accessibleLabel: newValue })
						}
					/>
				</PanelBody>
			</InspectorControls>
			<BlockControls>
				<AlignmentControl
					value={align}
					onChange={(newValue) => setAttributes({ align: newValue })}
				/>
				{!isUrlSet && (
					<ToolbarButton
						title={__('Link')}
						name="link"
						icon={link}
						onClick={startEditing}
					/>
				)}
				{isUrlSet && (
					<ToolbarButton
						title={__('Unlink')}
						name="link"
						icon={linkOff}
						onClick={unlink}
						isActive={true}
					/>
				)}
			</BlockControls>
			{isSelected && (isEditingUrl || isUrlSet) && (
				<Popover
					onClose={() => setIsEditingUrl(false)}
					focusOnMount={isEditingUrl ? 'firstElement' : false}
				>
					<LinkControl
						value={{ url, opensInNewTab }}
						forceIsEditingLink={isEditingUrl}
						onChange={({
							url: newUrl,
							opensInNewTab: newOpensInNewTab,
						}) => {
							setAttributes({ url: newUrl });
							setOpensInNewTab(newOpensInNewTab);
						}}
						onRemove={unlink}
					/>
				</Popover>
			)}
			<div {...blockProps}>
				<RichText
					aria-label={__('Link text')}
					allowedFormats={[
						'core/bold',
						'core/italic',
						'core/subscript',
						'core/superscript',
					]}
					placeholder={__('Add link text…')}
					value={text}
					withoutInteractiveFormatting
					className={'link'}
					identifier="text"
					onChange={setLinkText}
				/>
			</div>
		</>
	);
}

export default Edit;
