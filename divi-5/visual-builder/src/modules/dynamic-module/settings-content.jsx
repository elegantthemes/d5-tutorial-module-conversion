import React from 'react';

import { __ } from '@wordpress/i18n';

import { TextContainer } from '@divi/field-library';
import { GroupContainer } from '@divi/modal';
import {
  AdminLabel,
  Background,
  FieldContainer,
  LinkOptions,
} from '@divi/module';

import { defaultSettingsAttrs } from './constants';

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
