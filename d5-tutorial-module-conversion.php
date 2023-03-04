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
Text Domain: d5-tutorial-module-conversion
Domain Path: /languages

D5 Module Extension Example is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 2 of the License, or
any later version.

D5 Module Extension Example is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with D5 Module Extension Example. If not, see https://www.gnu.org/licenses/gpl-2.0.html.
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
 *
 * @since 1.0.0
 */
function dtmc_register_modules() {
	require_once DTMC_PATH . 'modules/StaticModule/StaticModule.php';
	require_once DTMC_PATH . 'modules/DynamicModule/DynamicModule.php';
}
add_action( 'et_builder_ready', 'dtmc_register_modules' );

/**
 * Enqueue Visual Builder Assets
 *
 * @since 1.0.0
 */
function dtmc_enqueue_visual_builder_assets() {
	if ( et_core_is_fb_enabled() ) {
		wp_enqueue_script(
			'dtmc-visual-builder',
			DTMC_URL . 'visual-builder/build/d5-tutorial-module-conversion.js',
			array( 'react', 'jquery' ),
			'1.0.0',
			true
		);
	}
}
add_action( 'wp_enqueue_scripts', 'dtmc_enqueue_visual_builder_assets' );
