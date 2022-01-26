<?php
/**
 * @file
 * Block output for a card.
 * This is in a separate file so that it can be included both in the query-card
 * block used within Query Loop blocks and in any ACF blocks that use a
 * Relationship field to manually select content to include.
 */

function cardMarkup($image, $eyebrow, $url, $title, $summary, $linkText, $linkLabel = '', $openInNewTab = false) {
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
	} elseif ($title) {
		$markup .= sprintf('<h3 class="card__title">%s</h3>', $title);
	}
	$markup .= '</div>';
	if ($summary) {
		$markup .= sprintf('<div class="card__content">%s</div>', $summary);
	}
	if ($url && $linkText) {
		$markup .= sprintf('
		<div class="card__footer">
			<div class="card__readmore">
				<a href="%1$s" class="readmore-link" aria-label="%4$s"%3$s>
					%2$s
				</a>
			</div>
		</div>
		',
			$url,
			$linkText,
			$openInNewTab ? ' target="_blank" rel="noreferrer noopener"' : '',
			$linkLabel ?: $linkText
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
