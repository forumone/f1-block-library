<?php
/**
 * Plugin Name:       Forum One Block Library
 * Description:       Collection of blocks.
 * Requires at least: 5.8
 * Author:            Forum One
 * Text Domain:       f1-block-library
 *
 * @package           f1-block-library
 */

require_once plugin_dir_path(__FILE__) . 'copyright/copyright-callback.php';
require_once plugin_dir_path(__FILE__) . 'cards/query-cards/query-cards-callback.php';
require_once plugin_dir_path(__FILE__) . 'cards/single-card/single-card-callback.php';

function f1_block_library_register_blocks() {
  	register_block_type_from_metadata(__DIR__ . '/back-to-top');
	register_block_type_from_metadata(__DIR__ . '/accordion-item');
	register_block_type_from_metadata(__DIR__ . '/accordion');
	register_block_type_from_metadata(__DIR__ . '/copyright', array(
		'render_callback' => 'f1_block_library_copyright_callback',
	) );
	register_block_type_from_metadata(__DIR__ . '/skiplinks');
	register_block_type_from_metadata(__DIR__ . '/cards/query-cards', array(
		'render_callback' => 'f1_block_library_query_cards_callback',
		'skip_inner_blocks' => true,
	) );
	register_block_type_from_metadata(__DIR__ . '/cards/single-card', array(
		'render_callback' => 'f1_block_library_single_card_callback',
	));
}
add_action( 'init', 'f1_block_library_register_blocks' );

if ( function_exists( 'acf_register_block_type' ) ) {
	function f1_block_library_register_acf_blocks() {
		acf_register_block_type(array(
			'name'				=> 'featured-cards',
			'title'				=> __( 'Cards' ),
			'render_template' 	=> plugin_dir_path(__FILE__) . 'cards/featured-cards/featured-cards-render.php',
			'category'			=> 'widgets',
			'supports'			=> array( 'align' => array( 'wide', 'full' ) ),
			'enqueue_style'		=> plugin_dir_url( __FILE__ ) . 'build/query-cards.css',
		) );
	}
	add_action( 'acf/init', 'f1_block_library_register_acf_blocks' );
}
