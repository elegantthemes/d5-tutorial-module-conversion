<?php
/**
 * REST Registration.
 *
 * @package DTMC\Modules;
 */

namespace DTMC\Modules;

if ( ! defined( 'ABSPATH' ) ) {
  die( 'Direct access forbidden.' );
}

use ET\Builder\Framework\Route\RESTRoute;
use DTMC\Modules\DynamicModule\DynamicModuleController;

/**
 * Class RESTRegistration
 *
 * @package DTMC\Modules
 */
class RESTRegistration {
  /**
   * Register REST routes for modules.
   */
  public function register_routes() {
    if ( class_exists( 'ET\Builder\Framework\Route\RESTRoute' ) ) {
      $route = new RESTRoute( 'dtmc/v1' ); // Namespace for the extension.
      
      // Route for Dynamic Module.
      $route->prefix('/module-data')->get( '/dynamic-module', DynamicModuleController::class );
    }
  }
}