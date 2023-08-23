<?php

namespace DTMC\Modules\DynamicModule\DynamicModuleTraits;

if ( ! defined( 'ABSPATH' ) ) {
  die( 'Direct access forbidden.' );
}

trait RenderContentTrait {
  public static function render_content( $title = '' ) {
    return sprintf(
      '<div>
      <p>This is written by user:</p>
      <p>%1$s</p>
      <p>This sentence comes from server.</p>
      </div>',
      esc_html( $title )
    );
  }
}