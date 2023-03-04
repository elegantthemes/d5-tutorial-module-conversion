<?php
/**
 * Simple static module that has title and content area
 *
 * @since 1.0.0
 */
class DTMC_Static_Module extends ET_Builder_Module {
	// Module slug (also used as shortcode tag)
	public $slug = 'dtmc_static_module';

	// Visual Builder support (off|partial|on)
	public $vb_support = 'on';

	/**
	 * Module properties initialization
	 *
	 * @since 1.0.0
	 */
	function init() {
		// Module name
		$this->name = esc_html__( 'DTMC Static Module', 'd5-tutorial-module-conversion' );

		// Module Icon
		// Load customized svg icon and use it on builder as module icon. If you don't have svg icon, you can use
		$this->icon_path = plugin_dir_path( __FILE__ ) . 'icon.svg';

		// Toggle settings
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
	 *
	 * @since 1.0.0
	 *
	 * @return array
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

	/**
	 * Render module output
	 *
	 * @since 1.0.0
	 *
	 * @param array  $attrs       List of unprocessed attributes
	 * @param string $content     Content being processed
	 * @param string $render_slug Slug of module that is used for rendering output
	 *
	 * @return string module's rendered output
	 */
	function render( $attrs, $content = null, $render_slug ) {
		// Module specific props added on $this->get_fields()
		$title        = $this->props['title'];
		$header_level = et_pb_process_header_level( $this->props['header_level'], 'h2' );

		// Render module content
		$output = sprintf(
			'<%1$s class="dtmc_static_module_title">%2$s</%1$s>
				<div class="dtmc_static_module_content">%3$s</div>',
			$header_level,
			esc_html( $title ),
			et_sanitized_previously( $this->content )
		);

		return $output;
	}
}

new DTMC_Static_Module();
