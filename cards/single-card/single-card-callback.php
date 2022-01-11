<?php

require_once plugin_dir_path(__FILE__) . '../card-output.php';

/**
* @param $block_attributes
* @param $block
* @param $context
* @return string
*/
function f1_block_library_single_card_callback( $block_attributes, $block, $context ) {
	return cardMarkup(
		!empty($block_attributes['imageId']) ? wp_get_attachment_image($block_attributes['imageId'], 'post-thumbnail') : null,
		!empty($block_attributes['eyebrow']) ? $block_attributes['eyebrow'] : null,
		!empty($block_attributes['url']) ? $block_attributes['url'] : null,
		!empty($block_attributes['cardTitle']) ? $block_attributes['cardTitle'] : null,
		!empty($block_attributes['summary']) ? $block_attributes['summary'] : null,
		!empty($block_attributes['opensInNewTab']) ? $block_attributes['opensInNewTab'] : false
	);
}
