<?php
/**
 * @file
 * Block output for a card.
 * This is in a separate file so that it can be included both in the query-card
 * block used within Query Loop blocks and in any ACF blocks that use a
 * Relationship field to manually select content to include.
 */
return sprintf('
	<div class="card">
		<div class="card__body">
			<div class="card__header">
				<div class="card__date">%3$s</div>
				<h3 class="card__title"><a href="%1$s">%2$s</a></h3>
			</div>
			<div class="card__content">%4$s</div>
			<div class="card__footer">
				<div class="card__readmore">
					<a href="%1$s" class="readmore-link">
						%5$s
						<span class="readmore-link__icon">
							<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">
							  <path fill="#231f20" d="M14 4.648l9.352 9.352-9.352 9.352-1.641-1.641 6.508-6.563h-14.219v-2.297h14.219l-6.508-6.563z"></path>
							</svg>
							<span class="readmore-link__accessibility-description">%6$s %2$s</span>
						</span>
					</a>
				</div>
			</div>
		</div>
	</div>',
get_the_permalink($post),
get_the_title($post),
get_the_date('', $post),
get_the_excerpt($post),
__( 'Read more' ),
__( 'about' )
);
