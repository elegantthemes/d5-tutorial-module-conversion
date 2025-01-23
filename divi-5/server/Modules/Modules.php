<?php
/**
 * All modules.
 *
 * @package DTMC\Modules;
 */

namespace DTMC\Modules;

if ( ! defined( 'ABSPATH' ) ) {
	die( 'Direct access forbidden.' );
}

use DTMC\Modules\StaticModule\StaticModule;
use DTMC\Modules\DynamicModule\DynamicModule;

  // Register REST routes.
add_action(
	'init',
	function() {
		$restApi = new RESTRegistration();
		$restApi->register_routes();
	}
);

add_action(
	'divi_module_library_modules_dependency_tree',
	function( $dependency_tree ) {
		$dependency_tree->add_dependency( new StaticModule() );
		$dependency_tree->add_dependency( new DynamicModule() );
	}
);
