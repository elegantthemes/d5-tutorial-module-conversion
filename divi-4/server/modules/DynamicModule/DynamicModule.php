<?php
/**
 * Dynamic module that renders the content on the server.
 */
class DTMC_Dynamic_Module extends ET_Builder_Module {
  // Module slug (also used as shortcode tag).
  public $slug = 'dtmc_dynamic_module';

  // Visual Builder support (off|partial|on).
  public $vb_support = 'on';

  /**
   * Module properties initialization
   */
  function init() {
    // Module name.
    $this->name = esc_html__( 'DTMC Dynamic Module', 'd5-tutorial-module-conversion' );

    // Toggle settings.
    $this->settings_modal_toggles = array(
      'general'  => array(
        'toggles' => array(
          'main_content' => esc_html__( 'Text', 'd5-tutorial-module-conversion' ),
        ),
      ),
      'advanced' => array(
        'toggles' => array(
          'text'  => array(
            'title'    => et_builder_i18n( 'Text' ),
            'priority' => 49,
          ),
          'width' => array(
            'title'    => et_builder_i18n( 'Sizing' ),
            'priority' => 80,
          ),
        ),
      ),
    );

    $this->advanced_fields = array(
      'fonts'          => array(
        'header' => array(
          'label'        => et_builder_i18n( 'Title' ),
          'css'          => array(
            'main' => '%%order_class%% .dtmc_dynamic_module_title',
          ),
          'header_level' => array(
            'default' => 'h2',
          ),
        ),
        'body'   => array(
          'label'          => et_builder_i18n( 'Body' ),
          'css'            => array(
            'main' => '%%order_class%% .dtmc_dynamic_module_content',
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
      'title' => array(
        'label'    => esc_html__( 'Title', 'et_builder' ),
        'selector' => '.dtmc_dynamic_module_title',
      ),
    );
  }

  /**
   * Module's specific fields
   */
  public function get_fields() {
    return array(
      'title'      => array(
        'label'           => esc_html__( 'Title', 'd5-tutorial-module-conversion' ),
        'type'            => 'text',
        'option_category' => 'basic_option',
        'description'     => esc_html__( 'Text entered here will appear as title.', 'd5-tutorial-module-conversion' ),
        'toggle_slug'     => 'main_content',
      ),

      // In Divi 4, this is how you define attribute property for dynamic content.
      // Set field (attribute), and set `computed_callback` property which will
      // point to method where the data should be processed.
      '__content' => array(
        'type'                => 'computed',
        'computed_callback'   => array( 'DTMC_Dynamic_Module', 'get_server_content' ),
        'computed_depends_on' => array(
          'title',
        ),
      ),
    );
  }

  /**
   * Render server defined content
   */
  public static function get_server_content( $args = array() ) {
    $user_title = $args['title'] ?? '';

    $output = sprintf(
      '<div>
      <p>This is written by user:</p>
      <p>%1$s</p>
      <p>This sentence comes from server.</p>
      </div>',
      esc_html( $user_title )
    );

    return $output;
  }

  /**
   * Render module output
   */
  public function render( $attrs, $content = null, $render_slug ) {
    $dynamic_content = self::get_server_content(
      array(
        'title' => $this->props['title'],
      )
    );

    // Module specific props added on $this->get_fields().
    $title        = $this->props['title'];
    $header_level = et_pb_process_header_level( $this->props['header_level'], 'h2' );

    // Render module content.
    $output = sprintf(
      '<%1$s class="dtmc_dynamic_module_title">%2$s</%1$s>
        <div class="dtmc_dynamic_module_content">%3$s</div>',
      $header_level,
      esc_html( $title ),
      et_sanitized_previously( $dynamic_content )
    );

    return $output;
  }
}

new DTMC_Dynamic_Module();