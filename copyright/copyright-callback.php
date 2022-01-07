<?php

function f1_block_library_copyright_callback( $block_attributes, $block, $context ) {
	$classnames = 'copyright';
	$wrapper_attributes = get_block_wrapper_attributes( array( 'class' => $classnames ) );
	return sprintf(
		'<div %1$s>&copy;%2$s %3$s</div>',
		$wrapper_attributes,
		date('Y'),
		$block_attributes['copyrightText']
	);
}
