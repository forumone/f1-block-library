<?php

require_once plugin_dir_path(__FILE__) . '../card-output.php';

/**
 * @param $block_attributes
 * @param $block
 * @param $context
 * @return string
 */
function f1_block_library_query_cards_callback( $block_attributes, $block, $context ) {
	// Get the query args.
	$page_key = isset( $block->context['queryId'] ) ? 'query-' . $block->context['queryId'] . '-page' : 'query-page';
	$page = empty( $_GET[ $page_key ] ) ? 1 : (int) $_GET[ $page_key ];
	$query_args = build_query_vars_from_query_block( $block, $page );

	// Override the custom query with the global query if needed.
	// This is taken from the core/post-template callback function.
	$use_global_query = ( isset( $block->context['query']['inherit'] ) && $block->context['query']['inherit'] );
	if ( $use_global_query ) {
		global $wp_query;
		if ( $wp_query && isset( $wp_query->query_vars ) && is_array( $wp_query->query_vars ) ) {
			// Unset `offset` because if is set, $wp_query overrides/ignores the paged parameter and breaks pagination.
			unset( $query_args['offset'] );
			$query_args = wp_parse_args( $wp_query->query_vars, $query_args );
			// Set the post type to the current post's type.
			if ( empty( $query_args['post_type'] ) && is_singular() ) {
				$query_args['post_type'] = get_post_type( get_the_ID() );
			}
		}
	}

	$query = new WP_Query( $query_args );
	// Bail if there are no posts to display.
	if ( ! $query->have_posts() ) {
		return '';
	}

	// Get any custom class names added to the block.
	$classnames = 'cards';
	if ( !empty( $block_attributes['columns'] ) ) {
		$classnames .= ' cards--columns-' . intval( $block_attributes['columns'] );
	}
	$wrapper_attributes = get_block_wrapper_attributes( array( 'class' => $classnames ) );

	// Render the cards
	$content = '';
	while ( $query->have_posts() ) {
		$post = $query->the_post();
		$content .= cardMarkup(
			get_the_date('', $post),
			get_the_permalink($post),
			get_the_title($post),
			get_the_excerpt($post)
		);
	}
	wp_reset_postdata();

	// Render the block
	return sprintf(
		'<div %1$s>%2$s</div>',
		$wrapper_attributes,
		$content
	);
}
