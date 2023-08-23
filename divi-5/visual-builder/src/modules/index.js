import { addAction } from '@wordpress/hooks';

import { dynamicModule, dynamicModuleMetadata } from "./dynamic-module";
import { staticModule, staticModuleMetadata } from "./static-module";

const { registerModule } = window?.divi?.moduleLibrary;

addAction('divi.moduleLibrary.registerModuleLibraryStore.after', 'dtmc', () => {
  registerModule(staticModuleMetadata, staticModule);
  registerModule(dynamicModuleMetadata, dynamicModule);
});