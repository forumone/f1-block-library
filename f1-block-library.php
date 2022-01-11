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

function f1_block_library_register_blocks() {
  	register_block_type_from_metadata(__DIR__ . '/back-to-top');
	register_block_type_from_metadata(__DIR__ . '/accordion-item');
	register_block_type_from_metadata(__DIR__ . '/accordion');
	register_block_type_from_metadata(__DIR__ . '/copyright', array(
		'render_callback' => 'f1_block_library_copyright_callback',
	) );
	register_block_type_from_metadata(__DIR__ . '/skiplinks');
	register_block_type_from_metadata(__DIR__ . '/mega-menu');
}
add_action( 'init', 'f1_block_library_register_blocks' );
