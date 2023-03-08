<?php

namespace DTMC\Modules\StaticModule\StaticModuleTraits;

if ( ! defined( 'ABSPATH' ) ) {
	die( 'Direct access forbidden.' );
}

use DTMC\Modules\StaticModule\StaticModule;
use ET\Builder\Framework\Utility\HTMLUtility;
use ET\Builder\Framework\Utility\SanitizerUtility;
use ET\Builder\FrontEnd\BlockParser\BlockParserStore;
use ET\Builder\Packages\Module\Module;
use ET\Builder\Packages\Module\Options\Background\BackgroundComponents;

trait RenderCallbackTrait {
	public static function render_callback( $block_attributes, $content, $block ) {
		$module_attrs = $block_attributes;

		// Title.
		$header_level = $module_attrs['titleFont']['font']['desktop']['value']['headingLevel'] ?? 'h2';
		$header_text  = $module_attrs['title']['desktop']['value'] ?? '';
		$header       = ! $header_text
			? ''
			: HTMLUtility::render(
				[
					'tag'               => SanitizerUtility::sanitize_heading_tag( $header_level, 'h2' ),
					'attributes'        => [
						'class' => 'dtmc_static_module_title',
					],
					'childrenSanitizer' => 'esc_html',
					'children'          => $header_text,
				]
			);

		// Content.
		$rendered_content = HTMLUtility::render(
			[
				'tag'               => 'div',
				'attributes'        => [
					'class' => 'dtmc_static_module_content',
				],
				'childrenSanitizer' => 'et_core_esc_previously',
				'children'          => $module_attrs['content']['desktop']['value'] ?? '',
			]
		);

		$parent = BlockParserStore::get_parent( $block->parsed_block['id'], $block->parsed_block['storeInstance'] );

		return Module::render(
			[
				// FE only.
				'orderIndex'      => $block->parsed_block['orderIndex'],
				'storeInstance'   => $block->parsed_block['storeInstance'],

				// VB equivalent.
				'attrs'           => $block_attributes,
				'id'              => $block->parsed_block['id'],
				'moduleClassName' => '',
				'name'            => $block->block_type->name,
				// 'classnamesFunction'  => [ StaticModule::class, 'module_classnames' ],
				'moduleCategory'  => $block->block_type->category,
				'stylesComponent' => [ StaticModule::class, 'module_styles' ],
				'scriptDataComponent' => [ StaticModule::class, 'module_script_data' ],
				'parentAttrs'     => $parent->attrs ?? [],
				'parentId'        => $parent->id ?? '',
				'parentName'      => $parent->blockName ?? '',
				'children'        => BackgroundComponents::component(
					[
						'attr'          => $block_attributes['background'] ?? [],
						'id'            => $block->parsed_block['id'],

						// FE only.
						'orderIndex'    => $block->parsed_block['orderIndex'],
						'storeInstance' => $block->parsed_block['storeInstance'],
					]
				) . $header . $rendered_content,
			]
		);
	}
}
