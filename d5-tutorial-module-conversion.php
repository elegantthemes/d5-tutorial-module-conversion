<?php
/*
Plugin Name: D5 Tutorial Module Conversion
Plugin URI:
Description: D5 Tutorial for module conversion from Divi 4 to Divi 5
Version:     1.0.0
Author:      Elegant Themes
Author URI:  https://elegantthemes.com
License:     GPL2
License URI: https://www.gnu.org/licenses/gpl-2.0.html
*/

if ( ! defined( 'ABSPATH' ) ) {
	die( 'Direct access forbidden.' );
}

// Setup constants.
// DTMC = Divi 5 Tutorial Module Conversion.
define( 'DTMC_PATH', plugin_dir_path( __FILE__ ) );
define( 'DTMC_URL', plugin_dir_url( __FILE__ ) );

/**
 * Register Divi Modules
 */
function dtmc_register_module() {
	require_once DTMC_PATH . 'divi-4/server/modules/StaticModule/StaticModule.php';
	require_once DTMC_PATH . 'divi-4/server/modules/DynamicModule/DynamicModule.php';
}
add_action( 'et_builder_ready', 'dtmc_register_module' );

/**
 * Enqueue Visual Builder Assets
 */
function dtmc_enqueue_visual_builder_assets() {
	if ( et_core_is_fb_enabled() ) {
		wp_enqueue_script(
			'dtmc-visual-builder',
			DTMC_URL . 'divi-4/visual-builder/build/d5-tutorial-module-conversion.js',
			array( 'react', 'jquery' ),
			'1.0.0',
			true
		);
	}
}
add_action( 'wp_enqueue_scripts', 'dtmc_enqueue_visual_builder_assets' );

// Load Divi 5 modules.
require_once DTMC_PATH . 'divi-5/divi-5.php';
