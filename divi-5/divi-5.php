<?php
// Require php files.
require_once DTMC_PATH . 'divi-5/vendor/autoload.php';
require_once DTMC_PATH . 'divi-5/modules/Modules.php';

/**
 * Enqueue Divi 5 Visual Builder Assets
 *
 * @since 1.0.0
 */
function dtmc_divi5_enqueue_visual_builder_assets() {
	if ( et_core_is_fb_enabled() && et_builder_d5_enabled() ) {
		wp_enqueue_script(
			'dtmc-divi5-visual-builder',
			DTMC_URL . 'divi-5/visual-builder/build/d5-tutorial-module-conversion.js',
			array( 'react', 'jquery', 'divi-module-library', 'wp-hooks' ),
			'1.0.0',
			true
		);
	}
}
add_action( 'et_vb_assets_before_enqueue_packages', 'dtmc_divi5_enqueue_visual_builder_assets' ); // You must use this hook to enqueue your assets for the Divi 5 Visual Builder.
