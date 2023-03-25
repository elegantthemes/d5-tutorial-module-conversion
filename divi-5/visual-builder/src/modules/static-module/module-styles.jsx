import React from 'react';

import {
  CssStyle,
  ElementStyle,
  StyleContainer,
  TextStyle,
} from '@divi/module';

import { cssFields } from './custom-css';

/**
 * Module style component for static module
 */
export const ModuleStyles = ({
  attrs,
  settings,
  orderClass,
  mode,
  state,
  noStyleTag
}) => (
  <StyleContainer mode={mode} state={state} noStyleTag={noStyleTag}>
    {/* Element: Module */}
    <ElementStyle
      attrs={{
        animation: attrs?.animation ?? {},
        background: attrs?.background ?? {},
        border: attrs?.border ?? {},
        boxShadow: attrs?.boxShadow ?? {},
        disabledOn: attrs?.disabledOn ?? {},
        filter: attrs?.filter ?? {},
        overflow: attrs?.overflow ?? {},
        position: attrs?.position ?? {},
        sizing: attrs?.sizing ?? {},
        spacing: attrs?.spacing ?? {},
        transform: attrs?.transform ?? {},
        zIndex: attrs?.zIndex ?? {},
      }}
      selector={orderClass}
      disabledOn={{
        disabledModuleVisibility: settings?.disabledModuleVisibility
      }}
      sizing={{
        propertySelectors: {
          desktop: {
            value: {
              'margin-left': `${orderClass}.et_pb_module`,
              'margin-right': `${orderClass}.et_pb_module`,
            },
          },
        },
        important: {
          desktop: {
            value: {
              'margin-left': true,
              'margin-right': true,
            },
          },
        }
      }}
    />
    <CssStyle
      selector={orderClass}
      attr={attrs.css}
      cssFields={cssFields}
    />

    {/* Element: Title */}
    <ElementStyle
      attrs={{
        font: attrs?.titleFont ?? {},
      }}
      selector={[`${orderClass} h2.dtmc_static_module_title`,
      `${orderClass} h1.dtmc_static_module_title`,
      `${orderClass} h3.dtmc_static_module_title`,
      `${orderClass} h4.dtmc_static_module_title`,
      `${orderClass} h5.dtmc_static_module_title`,
      `${orderClass} h6.dtmc_static_module_title`].join(', ')}
      font={{
        headingLevel: 'h2',
        important: true,
      }}
    />

    {/* Element: Content */}
    <ElementStyle
      selector={`${orderClass} .dtmc_static_module_content`}
      attrs={{
        bodyFont: attrs?.bodyFont ?? {},
      }}
      bodyFont={{
        important: {
          body: {
            font: {
              desktop: {
                value: {
                  color: true,
                },
              },
            },
          },
        }
      }}
    />
    <TextStyle
      selector={`${orderClass} .dtmc_static_module_content`}
      attr={attrs?.text}
      propertySelectors={{
        textShadow: {
          desktop: {
            value: {
              'text-shadow': `${orderClass} .dtmc_static_module_content`,
            },
          },
        },
      }}
    />
  </StyleContainer>
);
