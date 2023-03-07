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

// Register REST routes.
add_action( 'init', function() {
		$restApi = new RESTRegistration();

		$restApi->register_routes();
} );
