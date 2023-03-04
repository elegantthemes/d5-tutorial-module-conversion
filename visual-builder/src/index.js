import $ from 'jquery';

import modules from './modules';

/**
 * Register modules to visual builder once the API is ready.
 *
 * @since ??
 */
$(window).on('et_builder_api_ready', (event, API) => {
  // Register modules.
  API.registerModules(modules);
});
