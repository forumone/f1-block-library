<?php $featured_cards = get_field('cards');
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
		$card = include plugin_dir_path( __FILE__ ) . '../card-output.php';
		echo $card;
	endforeach; wp_reset_postdata(); ?>
</div>
<?php endif; ?>
