import {
	useBlockProps,
	// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
	__experimentalLinkControl as LinkControl,
	RichText,
} from '@wordpress/block-editor';
import classnames from 'classnames';
import { __ } from '@wordpress/i18n';

function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps();
	const { eyebrow, url, title, opensInNewTab, cardTitle, summary } =
		attributes;
	const link = {
		url,
		title,
		opensInNewTab,
	};
	return (
		<div
			{...blockProps}
			className={classnames(blockProps.className, 'card')}
		>
			<LinkControl
				hasTextControl
				hasRichPreviews
				onChange={(newValue) => setAttributes(newValue)}
				value={link}
				label={__('Card URL')}
			/>
			<div className="card__body">
				<div className="card__header">
					<RichText
						placeholder={__('Date or Topic')}
						tagName="div"
						className="card__date"
						value={eyebrow}
						onChange={(newValue) =>
							setAttributes({ eyebrow: newValue })
						}
					/>
					<RichText
						placeholder={__('Title')}
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
		</div>
	);
}

export default Edit;
