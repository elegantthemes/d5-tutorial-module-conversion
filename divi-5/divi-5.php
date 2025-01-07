<?php
// Require php files.
require_once DTMC_PATH . 'divi-5/vendor/autoload.php';
require_once DTMC_PATH . 'divi-5/server/Modules/Modules.php';

/**
 * Enqueue Divi 5 Visual Builder Assets
 *
 * @since 1.0.0
 */
function dtmc_divi5_enqueue_visual_builder_assets() {
  if ( et_core_is_fb_enabled() && et_builder_d5_enabled() ) {
    // wp_enqueue_script(
    //   'dtmc-divi5-visual-builder',
    //   DTMC_URL . 'divi-5/visual-builder/build/d5-tutorial-module-conversion.js',
    //   array( 'react', 'jquery-core', 'divi-module-library', 'wp-hooks', 'divi-rest' ),
    //   '1.0.0',
    //   true
    // );
  }

  \ET\Builder\VisualBuilder\Assets\PackageBuildManager::register_package_build(
    [
      'name'   => 'dtmc-divi5-visual-builder',
      'version' => '1.0.0',
      'script' => [
        'src' => DTMC_URL . 'divi-5/visual-builder/build/d5-tutorial-module-conversion.js',
        'deps'               => [
          'divi-module-library',
          'divi-vendor-wp-hooks',
        ],
        'enqueue_top_window' => false,
        'enqueue_app_window' => true,
      ],
    ]
  );
}
add_action( 'divi_visual_builder_assets_before_enqueue_scripts', 'dtmc_divi5_enqueue_visual_builder_assets' ); // You must use this hook to enqueue your assets for the Divi 5 Visual Builder.