<?php

namespace DTMC\Modules\StaticModule\StaticModuleTraits;

if ( ! defined( 'ABSPATH' ) ) {
	die( 'Direct access forbidden.' );
}

use ET\Builder\Packages\Module\Options\Text\TextClassnames;
use ET\Builder\Packages\Module\Options\Animation\AnimationUtils;
use ET\Builder\Packages\Module\Options\Link\LinkUtils;

trait ModuleClassnamesTrait {
	public static function module_classnames( $args ) {
		$classnames_instance = $args['classnamesInstance'];
		$attrs               = $args['attrs'];

		// Text Options.
		$classnames_instance->add(
			TextClassnames::text_options_classnames(
				$attrs['text'] ?? [],
				[
					'orientation' => false,
				]
			),
			true
		);

		// Animation Options.
		$classnames_instance->add( AnimationUtils::classnames( $attrs['animation'] ?? [] ), true );

		// Link options.
		$classnames_instance->add( LinkUtils::classnames( $attrs['link'] ?? [] ), true );
	}
}
