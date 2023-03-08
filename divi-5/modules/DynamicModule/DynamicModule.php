<?php

/**
 * Dynamic Module class.
 *
 * @package DTMC\Modules\DynamicModule;
 */

namespace DTMC\Modules\DynamicModule;

if ( ! defined( 'ABSPATH' ) ) {
	die( 'Direct access forbidden.' );
}

use ET\Builder\Framework\DependencyManagement\Interfaces\DependencyInterface;
use ET\Builder\Packages\ModuleLibrary\ModuleRegistration;
use DTMC\Modules\DynamicModule\DynamicModuleTraits;

/**
 * Class DynamicModule
 *
 * @package DTMC\Modules\DynamicModule
 */
class DynamicModule implements DependencyInterface {

	use DynamicModuleTraits\RenderCallbackTrait;
	use DynamicModuleTraits\RenderContentTrait;
	use DynamicModuleTraits\ModuleStylesTrait;
	use DynamicModuleTraits\ModuleScriptDataTrait;

	public function load() {
		$module_json_folder_path = dirname( __DIR__, 2 ) . '/visual-builder/src/modules/dynamic-module';

		add_action(
			'init',
			function() use ( $module_json_folder_path ) {
				ModuleRegistration::register_module(
					$module_json_folder_path,
					[
						'render_callback' => [ $this, 'render_callback' ],
					]
				);
			}
		);
	}
}
