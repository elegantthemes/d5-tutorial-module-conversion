<?php

namespace DTMC\Modules\StaticModule\StaticModuleTraits;

if ( ! defined( 'ABSPATH' ) ) {
	die( 'Direct access forbidden.' );
}

use ET\Builder\FrontEnd\Module\Style;
use ET\Builder\Packages\Module\Options\Background\BackgroundStyle;
use ET\Builder\Packages\Module\Options\Text\TextStyle;
use ET\Builder\Packages\Module\Options\Font\FontStyle;
use ET\Builder\Packages\Module\Options\FontBodyGroup\FontBodyStyle;
use ET\Builder\Packages\Module\Options\Sizing\SizingStyle;
use ET\Builder\Packages\Module\Options\Spacing\SpacingStyle;
use ET\Builder\Packages\Module\Options\Border\BorderStyle;
use ET\Builder\Packages\Module\Options\BoxShadow\BoxShadowStyle;
use ET\Builder\Packages\Module\Options\Filters\FiltersStyle;
use ET\Builder\Packages\Module\Options\Transform\TransformStyle;
use ET\Builder\Packages\Module\Options\Css\CssStyle;
use ET\Builder\Packages\Module\Options\DisabledOn\DisabledOnStyle;
use ET\Builder\Packages\Module\Options\Overflow\OverflowStyle;
use ET\Builder\Packages\Module\Options\Position\PositionStyle;
use ET\Builder\Packages\Module\Options\ZIndex\ZIndexStyle;

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
					BackgroundStyle::style(
						[
							'selector' => $args['orderClass'],
							'attr'     => $attrs['background'] ?? [],
						]
					),
					TextStyle::style(
						[
							'selector'          => "{$args['orderClass']} .dtmc_static_module_content",
							'attr'              => $attrs['text'] ?? [],
							'propertySelectors' => [
								'textShadow' => [
									'desktop' => [
										'value' => [
											'text-shadow' => "{$args['orderClass']} .dtmc_static_module_content",
										],
									],
								],
							],
						]
					),
					FontStyle::style(
						[

							'selector'     => implode(
								', ',
								[
									"{$args['orderClass']} h2",
									"{$args['orderClass']} h1.dtmc_static_module_title",
									"{$args['orderClass']} h3.dtmc_static_module_title",
									"{$args['orderClass']} h3.dtmc_static_module_title",
									"{$args['orderClass']} h5.dtmc_static_module_title",
									"{$args['orderClass']} h6.dtmc_static_module_title",
								]
							),
							'attr'         => $attrs['titleFont'] ?? [],
							'headingLevel' => 'h2',
							'important'    => true,
						]
					),
					FontBodyStyle::font_body_style(
						[
							'selector'  => "{$args['orderClass']} .dtmc_static_module_content",
							'attr'      => $attrs['bodyFont'] ?? [],
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
						]
					),
					SpacingStyle::style(
						[
							'selector'  => $args['orderClass'],
							'attr'      => $attrs['spacing'] ?? [],
							'important' => true,
						]
					),
					SizingStyle::style(
						[
							'selector'          => $args['orderClass'],
							'attr'              => $attrs['sizing'] ?? [],
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
						]
					),
					BorderStyle::style(
						[
							'selector' => $args['orderClass'],
							'attr'     => $attrs['border'] ?? [],
						]
					),
					BoxShadowStyle::style(
						[
							'selector' => $args['orderClass'],
							'attr'     => $attrs['boxShadow'] ?? [],
						]
					),
					FiltersStyle::style(
						[
							'selector' => $args['orderClass'],
							'attr'     => $attrs['filter'] ?? [],
						]
					),
					TransformStyle::style(
						[
							'selector' => $args['orderClass'],
							'attr'     => $attrs['transform'] ?? [],
						]
					),
					CssStyle::style(
						[
							'selector'  => $args['orderClass'],
							'attr'      => $attrs['css'] ?? [],
							'cssFields' => self::custom_css(),
						]
					),
					DisabledOnStyle::style(
						[
							'selector'                 => $args['orderClass'],
							'attr'                     => $attrs['disabledOn'] ?? [],
							'disabledModuleVisibility' => $args['settings']['disabledModuleVisibility'] ?? null,
						]
					),
					OverflowStyle::style(
						[
							'selector' => $args['orderClass'],
							'attr'     => $attrs['overflow'] ?? [],
						]
					),
					PositionStyle::style(
						[
							'selector' => $args['orderClass'],
							'attr'     => $attrs['position'] ?? [],
						]
					),
					ZIndexStyle::style(
						[
							'selector' => $args['orderClass'],
							'attr'     => $attrs['zIndex'] ?? [],
						]
					),
				],
			]
		);
	}
}
