<?php
/**
 * Plugin Name: Designer Blocks for the Block Editor by Weaver
 * Plugin URI: https://weavertheme.com/designer-blocks-for-gutenberg-by-weaver/
 * Description: Add the latest web designer blocks to the WP 5 Block Editor (Gutenberg).
 * Author: Weaver Theme
 * Author URI: https:/weavertheme.com/about
 * Version: 1.0.1
 *
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once( plugin_dir_path( __FILE__ ) . 'src/init.php' );

function wvr_blocks_load_textdomain() {

		load_plugin_textdomain( 'blocks-by-weaver', false, basename(dirname( __FILE__ )) . '/languages' );
}

//add_action( 'plugins_loaded', 'wvr_blocks_load_textdomain' );
add_filter( 'block_categories', 'wvr_blocks_categories', 8 ); // let's be a bit rude...

function wvr_blocks_categories( $categories ) {

	return array_merge(
		$categories,
		array(
			array(
				'slug'  => 'wvrblocks',
				'title' => __( 'Designer Blocks by Weaver', 'blocks-by-weaver' ),
			),
		)
	);
}
