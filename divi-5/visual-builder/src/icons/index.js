import {
  addFilter,
} from '@wordpress/hooks';

import * as moduleDynamic from './module-dynamic';

// Add module icons to the icon library.
addFilter('iconLibrary.icon.map', 'd5TutorialModuleConversion', (icons) => {
  return {
    ...icons, // This is important. Without this, all other icons will be overwritten.
    [moduleDynamic.name]: moduleDynamic,
  };
});
