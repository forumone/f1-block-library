<?php

/**
* @param $block_attributes
* @param $block
* @param $context
* @return string
*/
function f1_block_library_single_card_callback( $block_attributes, $block, $context ) {
	$markup = include plugin_dir_path(__FILE__) . '../card-output.php';
	return sprintf(
		$markup,
		$block_attributes['url'],
		$block_attributes['cardTitle'],
		$block_attributes['eyebrow'],
		$block_attributes['summary'],
		__( 'Read more' ),
		__( 'about' )
	);
}
