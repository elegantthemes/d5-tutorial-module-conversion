<?php

namespace DTMC\Modules\DynamicModule\DynamicModuleTraits;

if ( ! defined( 'ABSPATH' ) ) {
	die( 'Direct access forbidden.' );
}

use ET\Builder\FrontEnd\Module\Style;
use ET\Builder\Packages\Module\Options\Text\TextStyle;
use ET\Builder\Packages\Module\Options\Element\ElementStyle;
use ET\Builder\Packages\Module\Options\Css\CssStyle;

trait ModuleStylesTrait {
	use CustomCssTrait;

	public static function module_styles( $args ) {
		$attrs = $args['attrs'] ?? [];

		Style::add(
			[
				'id'            => $args['id'],
				'name'          => $args['name'],
				'orderIndex'    => $args['orderIndex'],
				'storeInstance' => $args['storeInstance'],
				'styles'        => [
					// Element: Module.
					ElementStyle::style(
						[
							'selector'   => $args['orderClass'],
							'attrs'      => [
								'background' => $attrs['background'] ?? [],
								'border'     => $attrs['border'] ?? [],
								'boxShadow'  => $attrs['boxShadow'] ?? [],
								'disabledOn' => $attrs['disabledOn'] ?? [],
								'filter'     => $attrs['filter'] ?? [],
								'overflow'   => $attrs['overflow'] ?? [],
								'position'   => $attrs['position'] ?? [],
								'sizing'     => $attrs['sizing'] ?? [],
								'spacing'    => $attrs['spacing'] ?? [],
								'transform'  => $attrs['transform'] ?? [],
								'zIndex'     => $attrs['zIndex'] ?? [],
							],
							'disabledOn' => [
								'disabledModuleVisibility' => $args['settings']['disabledModuleVisibility'] ?? null,
							],
							'spacing'    => [
								'important' => true,
							],
							'sizing'     => [
								'propertySelectors' => [
									'desktop' => [
										'value' => [
											'margin-left'  => "{$args['orderClass']}.et_pb_module",
											'margin-right' => "{$args['orderClass']}.et_pb_module",
										],
									],
								],
								'important'         => [
									'desktop' => [
										'value' => [
											'margin-left'  => true,
											'margin-right' => true,
										],
									],
								],
							],
						]
					),
					CssStyle::style(
						[
							'selector'  => $args['orderClass'],
							'attr'      => $attrs['css'] ?? [],
							'cssFields' => self::custom_css(),
						]
					),

					// Element: Title.
					ElementStyle::style(
						[
							'selector' => implode(
								', ',
								[
									"{$args['orderClass']} h2",
									"{$args['orderClass']} h1.dtmc_dynamic_module_title",
									"{$args['orderClass']} h3.dtmc_dynamic_module_title",
									"{$args['orderClass']} h3.dtmc_dynamic_module_title",
									"{$args['orderClass']} h5.dtmc_dynamic_module_title",
									"{$args['orderClass']} h6.dtmc_dynamic_module_title",
								]
							),
							'attrs'    => [
								'font' => $attrs['titleFont'] ?? [],
							],
							'font'     => [
								'headingLevel' => 'h2',
								'important'    => true,
							],
						]
					),

					// Element: Content.
					ElementStyle::style(
						[
							'selector' => "{$args['orderClass']} .dtmc_dynamic_module_content",
							'attrs'    => [
								'bodyFont' => $attrs['bodyFont'] ?? [],
							],
							'bodyFont' => [
								'important' => [
									'body' => [
										'font' => [
											'desktop' => [
												'value' => [
													'color' => true,
												],
											],
										],
									],
								],
							],
						]
					),
					TextStyle::style(
						[
							'selector'          => "{$args['orderClass']} .dtmc_dynamic_module_content",
							'attr'              => $attrs['text'] ?? [],
							'propertySelectors' => [
								'textShadow' => [
									'desktop' => [
										'value' => [
											'text-shadow' => "{$args['orderClass']} .dtmc_dynamic_module_content",
										],
									],
								],
							],
						]
					),
				],
			]
		);
	}
}
