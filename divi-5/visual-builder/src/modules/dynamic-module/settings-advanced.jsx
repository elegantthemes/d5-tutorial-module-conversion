import React from 'react';

import { cssFields } from './custom-css';

const {
  CssGroup,
  IdClassesGroup,
  PositionSettingsGroup,
  ScrollSettingsGroup,
  TransitionGroup,
  VisibilitySettingsGroup,
} = window?.divi?.module;

/**
 * Advanced Settings panel for the Dynamic Module.
 */
export const SettingsAdvanced = () => (
  <React.Fragment>
    <IdClassesGroup />
    <CssGroup
      mainSelector=".dynamic-module" // This is the main selector for the module.
      cssFields={cssFields} // This is the list of CSS fields.
    />
    <VisibilitySettingsGroup />
    <TransitionGroup />
    <PositionSettingsGroup />
    <ScrollSettingsGroup />
  </React.Fragment>
);