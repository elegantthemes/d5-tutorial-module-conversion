import $ from 'jquery';

import DTMCStaticModule from './modules/static-module';
import DTMCDynamicModule from './modules/dynamic-module';

/**
 * Register modules to Visual Builder once the API is ready.
 */
$(window).on('et_builder_api_ready', (event, API) => {
  // Register module.
  API.registerModules([
    DTMCStaticModule,
    DTMCDynamicModule,
  ]);
});