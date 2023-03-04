<?php
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
			array( 'react', 'jquery' ),
			'1.0.0',
			true
		);
	}
}
add_action( 'wp_enqueue_scripts', 'dtmc_divi5_enqueue_visual_builder_assets' );
