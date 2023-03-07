import React from 'react';
import { cssFields } from './custom-css';

const {
  Css,
  IdClasses,
  PositionGroup,
  ScrollGroup,
  Transition,
  Visibility,
} = divi.module;

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