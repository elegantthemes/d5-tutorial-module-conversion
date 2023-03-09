import { addAction } from '@wordpress/hooks';
import { registerModule } from '@divi/module-library';

import { dynamicModule, dynamicModuleMetadata } from "./dynamic-module";
import { staticModule, staticModuleMetadata } from "./static-module";

addAction('moduleLibrary.registerModuleLibraryStore.after', 'dtmc', () => {
    registerModule(staticModuleMetadata, staticModule);
    registerModule(dynamicModuleMetadata, dynamicModule);
});