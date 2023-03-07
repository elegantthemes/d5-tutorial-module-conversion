import React from 'react';

const { __ } = wp.i18n;

const {
  Animation,
  Border,
  BoxShadow,
  Filters,
  Font,
  FontBodyGroup,
  Sizing,
  Spacing,
  Text,
  Transform,
} = divi.module;

import { defaultSettingsAttrs } from './constants';

/**
 * Design Settings panel for the Static Module.
 */
export const SettingsDesign = () => (
  <React.Fragment>
    <Text
        defaultGroupAttr={defaultSettingsAttrs.text}
    />
    <Font
      groupLabel={__('Title Text', 'd5-tutorial-module-conversion')}
      attrName="titleFont"
      fieldLabel={__('Title', 'd5-tutorial-module-conversion')}
      hideElements={{
        headingLevel: false,
      }}
      defaultGroupAttr={defaultSettingsAttrs.titleFont}
    />
    <FontBodyGroup />
    <Sizing />
    <Spacing />
    <Border />
    <BoxShadow />
    <Filters />
    <Transform />
    <Animation />
  </React.Fragment>
);
