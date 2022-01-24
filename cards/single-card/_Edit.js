import {
	useBlockProps,
	// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
	__experimentalLinkControl as LinkControl,
	RichText,
	MediaPlaceholder,
	BlockControls,
	MediaReplaceFlow,
} from '@wordpress/block-editor';
import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
import { isBlobURL } from '@wordpress/blob';
import { Spinner } from '@wordpress/components';

const isTemporaryMedia = (id, url) => !id && isBlobURL(url);

function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps();
	const {
		eyebrow,
		url,
		title,
		opensInNewTab,
		cardTitle,
		summary,
		imageId,
		imageUrl,
		imageAlt,
	} = attributes;

	const link = {
		url,
		title,
		opensInNewTab,
	};

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

	return (
		<>
			<BlockControls>
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
					<LinkControl
						hasTextControl
						onChange={(newValue) => setAttributes(newValue)}
						value={link}
						label={__('Card URL')}
					/>
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
								<a href={url} className="readmore-link">
									{__('Read more')}
									<span className="readmore-link__icon">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="28"
											height="28"
											viewBox="0 0 28 28"
										>
											<path
												fill="#231f20"
												d="M14 4.648l9.352 9.352-9.352 9.352-1.641-1.641 6.508-6.563h-14.219v-2.297h14.219l-6.508-6.563z"
											/>
										</svg>
										<span className="readmore-link__accessibility-description">{`${__(
											'about'
										)} ${cardTitle}`}</span>
									</span>
								</a>
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
