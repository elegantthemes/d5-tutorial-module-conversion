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

// Register REST routes.
add_action(
	'init',
	function() {
		$restApi = new RESTRegistration();

		$restApi->register_routes();
	}
);

add_action(
	'et_module_library_modules_dependency_tree',
	function( $dependency_tree ) {

		$dependency_tree->add_dependency( new StaticModule() );
	}
);
