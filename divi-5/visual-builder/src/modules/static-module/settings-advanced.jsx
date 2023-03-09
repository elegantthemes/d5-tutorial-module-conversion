import React from 'react';

import {
  Css,
  IdClasses,
  PositionGroup,
  ScrollGroup,
  Transition,
  Visibility,
} from '@divi/module';

import { cssFields } from './custom-css';

/**
 * Advanced Settings panel for the Static Module.
 */
export const SettingsAdvanced = () => (
  <React.Fragment>
    <IdClasses />
    <Css
      mainSelector=".static-module" // This is the main selector for the module.
      cssFields={cssFields} // This is the list of CSS fields.
    />
    <Visibility />
    <Transition />
    <PositionGroup />
    <ScrollGroup />
  </React.Fragment>
);