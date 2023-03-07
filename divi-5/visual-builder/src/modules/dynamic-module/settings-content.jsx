import React from 'react';

import { defaultSettingsAttrs } from './constants';

const { __ } = wp.i18n;

const { TextContainer } = divi.fieldLibrary;
const { GroupContainer } = divi.modal;
const {
  AdminLabel,
  Background,
  FieldContainer,
  LinkOptions,
} = divi.module;

/**
 * Content Settings panel for the Static Module.
 */
export const SettingsContent = () => (
  <React.Fragment>
    <GroupContainer
      id="mainContent"
      title={__('Text', 'd5-tutorial-module-conversion')}
    >
      <FieldContainer
        attrName="title"
        label={__('Title', 'd5-tutorial-module-conversion')}
        description={__('Text entered here will appear as title.', 'd5-tutorial-module-conversion')}
        sticky={false}
      >
        <TextContainer />
      </FieldContainer>
    </GroupContainer>
    <LinkOptions />
    <Background />
    <AdminLabel
      defaultGroupAttr={defaultSettingsAttrs.adminLabel}
    />
  </React.Fragment>
);
