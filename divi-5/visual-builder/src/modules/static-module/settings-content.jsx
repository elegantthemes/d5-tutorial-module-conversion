import React from 'react';

import { defaultSettingsAttrs } from './constants';

const { __ } = wp.i18n;

const {
  RichTextContainer,
  TextContainer,
} = divi.fieldLibrary;
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
      <FieldContainer
        attrName="content"
        label={__('Content', 'd5-tutorial-module-conversion')}
        description={__('Content entered here will appear inside the module.', 'd5-tutorial-module-conversion')}
        sticky={false}
      >
        <RichTextContainer />
      </FieldContainer>
    </GroupContainer>
    <LinkOptions />
    <Background />
    <AdminLabel
      defaultGroupAttr={defaultSettingsAttrs.adminLabel}
    />
  </React.Fragment>
);
