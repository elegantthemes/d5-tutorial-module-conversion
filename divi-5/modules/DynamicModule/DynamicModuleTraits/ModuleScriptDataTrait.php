<?php

namespace DTMC\Modules\DynamicModule\DynamicModuleTraits;

if ( ! defined( 'ABSPATH' ) ) {
	die( 'Direct access forbidden.' );
}

use ET\Builder\Packages\Module\Options\Animation\AnimationScriptData;
use ET\Builder\Packages\Module\Options\Sticky\StickyScriptData;
use ET\Builder\Packages\Module\Options\Link\LinkScriptData;
use ET\Builder\Packages\Module\Options\Background\BackgroundParallaxScriptData;

trait ModuleScriptDataTrait {
	public static function module_script_data( $args ) {
		$args = wp_parse_args(
			$args,
			[
				'id'            => '',
				'selector'      => '',
				'attrs'         => [],
				'storeInstance' => null,
			]
		);

		// Sticky Options.
		StickyScriptData::set(
			[
				'id'             => $args['id'],
				'selector'       => $args['selector'],
				'affectingAttrs' => [
					'position' => $args['attrs']['position'] ?? [],
					'scroll'   => $args['attrs']['scroll'] ?? [],
				],
				'attr'           => $args['attrs']['sticky'] ?? [],

				// FE only.
				'storeInstance'  => $args['storeInstance'],
			]
		);

		// Animation Options.
		AnimationScriptData::set(
			[
				'id'            => $args['id'],
				'selector'      => $args['selector'],
				'attr'          => $args['attrs']['animation'] ?? [],

				// FE only.
				'storeInstance' => $args['storeInstance'],
			]
		);

		// Link Options.
		LinkScriptData::set(
			[
				'id'            => $args['id'],
				'selector'      => $args['selector'],
				'attr'          => $args['attrs']['link'] ?? [],

				// FE only.
				'storeInstance' => $args['storeInstance'] ?? null,
			]
		);

		// Background Parallax Options.
		BackgroundParallaxScriptData::set(
			[
				'id'            => $args['id'],
				'selector'      => $args['selector'],
				'attr'          => $args['attrs']['background'] ?? [],

				// FE only.
				'storeInstance' => $args['storeInstance'] ?? null,
			]
		);
	}
}
