import { DynamicModuleEdit } from './edit';
import metadata from './module.json';
import { SettingsAdvanced } from './settings-advanced';
import { SettingsContent } from './settings-content';
import { SettingsDesign } from './settings-design';
import { placeholderContent } from './placeholder-content';
import { conversionOutline } from './conversion-outline';

export const dynamicModuleMetadata = metadata;

export const dynamicModule = {
  renderers: {
    edit: DynamicModuleEdit,
  },
  settings: {
    content:  SettingsContent,
    design:   SettingsDesign,
    advanced: SettingsAdvanced,
  },
  placeholderContent,
  conversionOutline,
};