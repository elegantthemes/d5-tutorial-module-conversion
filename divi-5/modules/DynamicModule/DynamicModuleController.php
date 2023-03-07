<?php
/**
 * Dynamic Module Controller.
 *
 * @package DTMC\Modules\DynamicModule;
 */

namespace DTMC\Modules\DynamicModule;

if ( ! defined( 'ABSPATH' ) ) {
    die( 'Direct access forbidden.' );
}

use ET\Builder\Framework\Controllers\RESTController;
use WP_REST_Request;
use WP_REST_Response;

/**
 * Class DynamicModuleController
 *
 * @package DTMC\Modules\DynamicModule
 */
class DynamicModuleController extends RESTController {

    /**
	 * Return data for the Dynamic Module.
	 *
	 * @param WP_REST_Request $request REST request object.
	 *
	 * @return WP_REST_Response|WP_Error
	 */
	public static function index( WP_REST_Request $request ): WP_REST_Response {
        $title = $request->get_param( 'title' );

        $response = [];

        $response['data'] = sprintf(
			'<div>
			<p>This is written by user:</p>
			<p>%1$s</p>
			<p>This sentence comes from server.</p>
			</div>',
			esc_html( $title )
		);

        return self::response_success( $response );
    }

    /**
	 * Index action arguments.
	 *
	 * Endpoint arguments as used in `register_rest_route()`.
	 *
	 * @return array
	 */
	public static function index_args(): array {
		return [
			'title' => [
				'type'              => 'string',
				'default'           => '',
				'sanitize_callback' => function( $value, $request, $param ) {
					return esc_html( $value );
				},
			],
		];
	}

    /**
	 * Index action permission.
	 *
	 * Endpoint permission callback as used in `register_rest_route()`.
	 *
	 * @return bool
	 */
	public static function index_permission(): bool {
		return true; // You can use your own permission check here.
	}
}
