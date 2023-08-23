<?php
namespace DTMC\Modules\StaticModule\StaticModuleTraits;

if ( ! defined( 'ABSPATH' ) ) {
    die( 'Direct access forbidden.' );
}

use ET\Builder\Packages\Module\Options\Element\ElementScriptData;
use ET\Builder\Packages\Module\Layout\Components\MultiView\MultiViewScriptData;

trait ModuleScriptDataTrait {
  public static function module_script_data( $args ) {
    $id             = $args['id'] ?? '';
    $name           = $args['name'] ?? '';
    $selector       = $args['selector'] ?? '';
    $attrs          = $args['attrs'] ?? [];
    $store_instance = $args['storeInstance'] ?? null;

    // Module decoration attributes.
    $module_decoration_attrs = $attrs['module']['decoration'] ?? [];

    // Element Script Data Options.
    ElementScriptData::set(
      [
        'id'            => $id,
        'selector'      => $selector,
        'attrs'         => array_merge(
          $module_decoration_attrs,
          [
            'link' => $args['attrs']['module']['advanced']['link'] ?? [],
          ]
        ),
        'storeInstance' => $store_instance,
      ]
    );
  }
}