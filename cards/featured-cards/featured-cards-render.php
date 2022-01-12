<?php

require_once plugin_dir_path(__FILE__) . '../card-output.php';

$featured_cards = get_field('cards');
$classnames = 'cards';
if (get_field('style') == 'featured') {
	$classnames .= ' is-style-featured';
}
if (get_field('columns')) {
	$classnames .= ' cards--columns-' . intval( get_field( 'columns' ) );
}
if (!empty($block['className'])) {
	$classnames .= ' ' . $block['className'];
}
if( !empty($block['align']) ) {
	$classnames .= ' align' . $block['align'];
}
$wrapper_attributes = get_block_wrapper_attributes( array( 'class' => $classnames ) );
if ($featured_cards): ?>
<div <?php echo $wrapper_attributes; ?>>
	<?php foreach( $featured_cards as $post):
		setup_postdata($post);
		echo cardMarkup(
			get_the_post_thumbnail($post),
			get_the_date('', $post),
			get_the_permalink($post),
			get_the_title($post),
			get_the_excerpt($post)
		);
	endforeach; wp_reset_postdata(); ?>
</div>
<?php endif; ?>
