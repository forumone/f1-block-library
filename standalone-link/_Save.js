import { useBlockProps, RichText } from '@wordpress/block-editor';
import classnames from 'classnames';

function Save({ attributes }) {
	const { url, text, linkTarget, rel, accessibleLabel, align } = attributes;
	const blockProps = useBlockProps.save({
		className: classnames({
			[`has-text-align-${align}`]: align,
		}),
	});
	return (
		<RichText.Content
			{...blockProps}
			tagName="a"
			value={text}
			href={url}
			aria-label={accessibleLabel}
			target={linkTarget}
			rel={rel}
		/>
	);
}

export default Save;
