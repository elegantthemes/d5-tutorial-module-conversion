import React from 'react';

import {
  AnimationStyle,
  BackgroundStyle,
  BorderStyle,
  BoxShadowStyle,
  CssStyle,
  DisabledOnStyle,
  ElementStyle,
  FiltersStyle,
  FontBodyStyle,
  FontStyle,
  OverflowStyle,
  PositionStyle,
  SizingStyle,
  SpacingStyle,
  StyleContainer,
  TextStyle,
  TransformStyle,
  ZIndexStyle,
} from '@divi/module';

import { cssFields } from './custom-css';

/**
 * Module style component for dynamic module
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
      selector={orderClass}
      attrs={{
        animation: attrs?.animation ?? {},
        background: attrs?.background ?? {},
        border: attrs?.border ?? {},
        boxShadow: attrs?.boxShadow ?? {},
        disabledOn: attrs?.disabledOn ?? {},
        filter: attrs?.filter ?? {},
        overflow: attrs?.overflow ?? {},
        position: attrs?.position ?? {},
        spacing: attrs?.spacing ?? {},
        sizing: attrs?.sizing ?? {},
        transform: attrs?.transform ?? {},
        zIndex: attrs?.zIndex ?? {},
      }}
      disabledOn={{
        disabledModuleVisibility: settings?.disabledModuleVisibility
      }}
      spacing={{
        important: true,
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
      selector={[`${orderClass} h2.dtmc_dynamic_module_title`,
      `${orderClass} h1.dtmc_dynamic_module_title`,
      `${orderClass} h3.dtmc_dynamic_module_title`,
      `${orderClass} h4.dtmc_dynamic_module_title`,
      `${orderClass} h5.dtmc_dynamic_module_title`,
      `${orderClass} h6.dtmc_dynamic_module_title`].join(', ')}
      attrs={{
        font: attrs?.titleFont ?? {},
      }}
      font={{
        headingLevel: 'h2',
        important: true,
      }}
    />

    {/* Element: Content */}
    <ElementStyle
      selector={`${orderClass} .dtmc_dynamic_module_content`}
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
      selector={[`${orderClass} .et_pb_promo_description`,
      `${orderClass} .et_pb_module_header`].join(', ')}
      attr={attrs?.text}
      propertySelectors={{
        textShadow: {
          desktop: {
            value: {
              'text-shadow': `${orderClass} .et_pb_promo_description`,
            },
          },
        },
      }}
    />
  </StyleContainer>
);
