import {
	useBlockProps,
	// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
	__experimentalLinkControl as LinkControl,
	RichText,
	MediaPlaceholder,
	BlockControls,
	MediaReplaceFlow,
	InspectorControls,
} from '@wordpress/block-editor';
import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
import { isBlobURL } from '@wordpress/blob';
import {
	Spinner,
	TextControl,
	PanelBody,
	ToolbarButton,
	Popover,
} from '@wordpress/components';
import { useEffect, useState } from '@wordpress/element';
import { link as linkIcon, linkOff as linkOffIcon } from '@wordpress/icons';

const isTemporaryMedia = (id, url) => !id && isBlobURL(url);

function Edit({ attributes, setAttributes, isSelected }) {
	const blockProps = useBlockProps();
	const {
		eyebrow,
		url,
		opensInNewTab,
		cardTitle,
		summary,
		imageId,
		imageUrl,
		imageAlt,
		linkText,
		linkLabel,
	} = attributes;

	const setImageAttributes = (media) => {
		if (!media || !media.url) {
			setAttributes({
				imageUrl: null,
				imageId: null,
				imageAlt: null,
			});
			return;
		}
		setAttributes({
			imageUrl: media.url,
			imageId: media.id,
			imageAlt: media?.alt,
		});
	};

	const isUploadingMedia = isTemporaryMedia(imageId, imageUrl);
	const [isEditingUrl, setIsEditingUrl] = useState(false);
	const isUrlSet = !!url;
	const link = {
		url,
		opensInNewTab,
	};
	const unlink = () => {
		setAttributes({
			url: null,
			opensInNewTab: null,
		});
		setIsEditingUrl(false);
	};
	const editUrl = (event) => {
		event.preventDefault();
		setIsEditingUrl(true);
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
						value={linkLabel}
						onChange={(newValue) =>
							setAttributes({ linkLabel: newValue })
						}
					/>
				</PanelBody>
			</InspectorControls>
			<BlockControls>
				{!isUrlSet && (
					<ToolbarButton
						title={__('Link')}
						name="link"
						icon={linkIcon}
						onClick={editUrl}
					/>
				)}
				{isUrlSet && (
					<ToolbarButton
						title={__('Unlink')}
						name="link"
						icon={linkOffIcon}
						onClick={unlink}
					/>
				)}
				<MediaReplaceFlow
					mediaId={imageId}
					mediaUrl={imageUrl}
					allowedTypes={['image']}
					accept="image/*"
					onSelect={setImageAttributes}
					name={!imageUrl ? __('Add Image') : __('Replace Image')}
				/>
			</BlockControls>
			<div
				{...blockProps}
				className={classnames(blockProps.className, 'card')}
			>
				<div className="card__body">
					{isEditingUrl && (
						<Popover
							onClose={() => setIsEditingUrl(false)}
							focusOnMount={isEditingUrl ? 'firstElement' : false}
						>
							<LinkControl
								hasTextControl
								onChange={(newValue) => setAttributes(newValue)}
								value={link}
								label={__('Card URL')}
							/>
						</Popover>
					)}
					<div className="card__header">
						<RichText
							placeholder={__('Date or Topic')}
							allowedFormats={[
								'core/bold',
								'core/italic',
								'core/subscript',
								'core/superscript',
							]}
							tagName="div"
							className="card__date"
							value={eyebrow}
							onChange={(newValue) =>
								setAttributes({ eyebrow: newValue })
							}
						/>
						<RichText
							placeholder={__('Title')}
							allowedFormats={[
								'core/bold',
								'core/italic',
								'core/subscript',
								'core/superscript',
							]}
							tagName="h3"
							className="card__title"
							value={cardTitle}
							onChange={(newValue) =>
								setAttributes({ cardTitle: newValue })
							}
						/>
						<RichText
							placeholder={__('Summary')}
							tagName="div"
							className="card__content"
							value={summary}
							onChange={(newValue) =>
								setAttributes({ summary: newValue })
							}
						/>
						<div className="card__footer">
							<div className="card__readmore">
								<RichText
									tagName="div"
									className="card__readmore-link"
									value={linkText}
									onChange={(newValue) =>
										setAttributes({ linkText: newValue })
									}
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="card__media">
					{imageUrl && <img src={imageUrl} alt={imageAlt} />}
					{isUploadingMedia && <Spinner />}
					<MediaPlaceholder
						accept="image/*"
						allowedTypes={['image']}
						onSelect={setImageAttributes}
						multiple={false}
						handleUpload={true}
					/>
				</div>
			</div>
		</>
	);
}

export default Edit;
