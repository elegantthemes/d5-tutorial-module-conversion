import { StaticModuleEdit } from './edit';
import metadata from './module.json';
import { SettingsAdvanced } from './settings-advanced';
import { SettingsContent } from './settings-content';
import { SettingsDesign } from './settings-design';

export const staticModuleMetadata = metadata;

export const staticModule = {
  renderers: {
    edit: StaticModuleEdit,
  },
  settings: {
    content:  SettingsContent,
    design:   SettingsDesign,
    advanced: SettingsAdvanced,
  },
};