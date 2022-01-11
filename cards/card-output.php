<?php
/**
 * @file
 * Block output for a card.
 * This is in a separate file so that it can be included both in the query-card
 * block used within Query Loop blocks and in any ACF blocks that use a
 * Relationship field to manually select content to include.
 */

function cardMarkup($image, $eyebrow, $url, $title, $summary, $openInNewTab = false) {
	$markup = '
<div class="card">
	<div class="card__body">
		<div class="card__header">
	';
	if ($eyebrow) {
		$markup .= sprintf('<div class="card__date">%s</div>', $eyebrow);
	}
	if ($url && $title) {
		$markup .= sprintf('<h3 class="card__title"><a href="%1$s" target="%3$s">%2$s</a></h3>', $url, $title, $openInNewTab ? '_blank' : '_self');
	}
	$markup .= '</div>';
	if ($summary) {
		$markup .= sprintf('<div class="card__content">%s</div>', $summary);
	}
	if ($url && $title) {
		$markup .= sprintf('
		<div class="card__footer">
			<div class="card__readmore">
				<a href="%1$s" target="%5$s" class="readmore-link">
					%3$s
					<span class="readmore-link__icon">
						<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">
						  <path fill="#231f20" d="M14 4.648l9.352 9.352-9.352 9.352-1.641-1.641 6.508-6.563h-14.219v-2.297h14.219l-6.508-6.563z"></path>
						</svg>
						<span class="readmore-link__accessibility-description">%4$s %2$s</span>
					</span>
				</a>
			</div>
		</div>
		',
			$url,
			$title,
			__( 'Read more' ),
			__(' about' ),
			$openInNewTab ? '_blank' : '_self'
		);
	}
	$markup .= '</div>';
	if ($image) {
		$markup .= '<div class="card__media">';
			if ($url) {
				$markup .= sprintf('<a href="%1$s" target="%3$s">%2$s</a>', $url, $image, $openInNewTab ? '_blank' : '_self');
			} else {
				$markup .= $image;
			}
		$markup .= '</div>';
	}
$markup .= '</div>';

	return $markup;
}
