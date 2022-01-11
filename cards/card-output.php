<?php
/**
 * @file
 * Block output for a card.
 * This is in a separate file so that it can be included both in the query-card
 * block used within Query Loop blocks and in any ACF blocks that use a
 * Relationship field to manually select content to include.
 */

function cardMarkup($eyebrow, $url, $title, $summary) {
	$markup = '
<div class="card">
	<div class="card__body">
		<div class="card__header">
	';
	if ($eyebrow) {
		$markup .= sprintf('<div class="card__date">%s</div>', $eyebrow);
	}
	if ($url && $title) {
		$markup .= sprintf('<h3 class="card__title"><a href="%1$s">%2$s</a></h3>', $url, $title);
	}
	$markup .= '</div>';
	if ($summary) {
		$markup .= sprintf('<div class="card__content">%s</div>', $summary);
	}
	if ($url && $title) {
		$markup .= sprintf('
		<div class="card__footer">
			<div class="card__readmore">
				<a href="%1$s" class="readmore-link">
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
			__(' about' )
		);
	}
	$markup .= '
	</div>
</div>';

	return $markup;
}
