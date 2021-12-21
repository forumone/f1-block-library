<?php $featured_cards = get_field('cards');
if ($featured_cards): ?>
<div class="featured-cards<?php if (get_field('style') == 'featured'):?> is-style-featured<?php endif; ?>">
	<?php foreach( $featured_cards as $post):
		setup_postdata($post);
		$card = include plugin_dir_path( __FILE__ ) . '../card-output.php';
		echo $card;
	endforeach; wp_reset_postdata(); ?>
</div>
<?php endif; ?>
