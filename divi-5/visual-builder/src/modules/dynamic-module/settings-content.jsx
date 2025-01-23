import React from 'react';

import { __ } from '@wordpress/i18n';

const { TextContainer } = window?.divi?.fieldLibrary;
const { GroupContainer } = window?.divi?.modal;
const {
  AdminLabelGroup,
  BackgroundGroup,
  FieldContainer,
  LinkGroup,
} = window?.divi?.module;

/**
 * Content Settings panel for the Dynamic Module.
 */
export const SettingsContent = ({ defaultSettingsAttrs }) => (
  <React.Fragment>
    <GroupContainer
      id="mainContent"
      title={__('Text', 'd5-tutorial-module-conversion')}
    >
      <FieldContainer
        attrName="title.innerContent"
        label={__('Title', 'd5-tutorial-module-conversion')}
        description={__('Text entered here will appear as title.', 'd5-tutorial-module-conversion')}
        features={{
          sticky: false,
        }}
      >
        <TextContainer />
      </FieldContainer>
    </GroupContainer>
    <LinkGroup />
    <BackgroundGroup />
    <AdminLabelGroup
      defaultGroupAttr={defaultSettingsAttrs?.module?.meta?.adminLabel ?? {}}
    />
  </React.Fragment>
);