<?php
/**
 * Simple static module that has title and content area
 * IMPORTANT: Only field and affecting properties are displayed. Other properties and method are removed
 */
class DTMC_Static_Module extends ET_Builder_Module {
  /**
   * Module properties initialization
   */
  function init() {
    $this->advanced_fields = array(
      'fonts'          => array(
        'header' => array(
          'label'        => et_builder_i18n( 'Title' ),
          'css'          => array(
            'main' => '%%order_class%% .dtmc_static_module_title',
          ),
          'header_level' => array(
            'default' => 'h2',
          ),
        ),
        'body'   => array(
          'label'          => et_builder_i18n( 'Body' ),
          'css'            => array(
            'main' => '%%order_class%% .dtmc_static_module_content',
          ),
          'block_elements' => array(
            'tabbed_subtoggles' => true,
            'bb_icons_support'  => true,
            'css'               => array(
              'main' => '%%order_class%%',
            ),
          ),
        ),
      ),
      'background'     => array(
        'has_background_color_toggle' => false,
        'use_background_color'        => true,
      ),
      'margin_padding' => array(
        'css' => array(
          'important' => 'all',
        ),
      ),
      'text'           => array(
        'use_background_layout' => true,
        'options'               => array(
          'background_layout' => array(
            'default' => 'dark',
          ),
        ),
      ),
    );

    $this->custom_css_fields = array(
      'title'   => array(
        'label'    => esc_html__( 'Title', 'et_builder' ),
        'selector' => '.dtmc_static_module_title',
      ),
      'content' => array(
        'label'    => esc_html__( 'Content', 'et_builder' ),
        'selector' => '.dtmc_static_module_content',
      ),
    );
  }

  /**
   * Module's specific fields
   */
  function get_fields() {
    return array(
      'title'   => array(
        'label'           => esc_html__( 'Title', 'd5-tutorial-module-conversion' ),
        'type'            => 'text',
        'option_category' => 'basic_option',
        'description'     => esc_html__( 'Text entered here will appear as title.', 'd5-tutorial-module-conversion' ),
        'toggle_slug'     => 'main_content',
      ),
      'content' => array(
        'label'           => esc_html__( 'Content', 'd5-tutorial-module-conversion' ),
        'type'            => 'tiny_mce',
        'option_category' => 'basic_option',
        'description'     => esc_html__( 'Content entered here will appear inside the module.', 'd5-tutorial-module-conversion' ),
        'toggle_slug'     => 'main_content',
      ),
    );
  }
}

new DTMC_Static_Module();