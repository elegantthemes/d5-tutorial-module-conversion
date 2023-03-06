import { dynamicModule, dynamicModuleMetadata } from "./dynamic-module";
import { staticModule, staticModuleMetadata } from "./static-module";

const { addAction } = wp.hooks;
const { registerModule } =  divi.moduleLibrary;

addAction('moduleLibrary.registerModuleLibraryStore.after', 'dtmc', () => {
    registerModule(staticModuleMetadata, staticModule);
    registerModule(dynamicModuleMetadata, dynamicModule);
});