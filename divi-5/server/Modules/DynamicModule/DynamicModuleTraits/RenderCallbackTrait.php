<?php

namespace DTMC\Modules\DynamicModule\DynamicModuleTraits;

if ( ! defined( 'ABSPATH' ) ) {
		die( 'Direct access forbidden.' );
}

use DTMC\Modules\DynamicModule\DynamicModule;
use ET\Builder\Framework\Utility\HTMLUtility;
use ET\Builder\FrontEnd\BlockParser\BlockParserStore;
use ET\Builder\Packages\Module\Module;

trait RenderCallbackTrait {
	public static function render_callback( $attrs, $content, $block, $elements ) {

		// Title.
		$header = $elements->render(
			[
				'attrName' => 'title',
			]
		);

		// Content.
		$header_text      = $attrs['title']['innerContent']['desktop']['value'] ?? '';
		$rendered_content = HTMLUtility::render(
			[
				'tag'               => 'div',
				'attributes'        => [
					'class' => 'dtmc_dynamic_module_content',
				],
				'childrenSanitizer' => 'et_core_esc_previously',
				'children'          => DynamicModule::render_content( $header_text ),
			]
		);

		$parent = BlockParserStore::get_parent( $block->parsed_block['id'], $block->parsed_block['storeInstance'] );

		return Module::render(
			[
				// FE only.
				'orderIndex'          => $block->parsed_block['orderIndex'],
				'storeInstance'       => $block->parsed_block['storeInstance'],

				// VB equivalent.
				'attrs'               => $attrs,
				'elements'            => $elements,
				'id'                  => $block->parsed_block['id'],
				'moduleClassName'     => '',
				'name'                => $block->block_type->name,
				'classnamesFunction'  => [ DynamicModule::class, 'module_classnames' ],
				'moduleCategory'      => $block->block_type->category,
				'stylesComponent'     => [ DynamicModule::class, 'module_styles' ],
				'scriptDataComponent' => [ DynamicModule::class, 'module_script_data' ],
				'parentAttrs'         => $parent->attrs ?? [],
				'parentId'            => $parent->id ?? '',
				'parentName'          => $parent->blockName ?? '',
				'children'            => $elements->style_components(
					[
						'attrName' => 'module',
					]
				) . $header . $rendered_content,
			]
		);
	}
}
