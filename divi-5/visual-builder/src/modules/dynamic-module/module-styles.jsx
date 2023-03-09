import React from 'react';

import {
  AnimationStyle,
  BackgroundStyle,
  BorderStyle,
  BoxShadowStyle,
  CssStyle,
  DisabledOnStyle,
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
    <BackgroundStyle
      selector={orderClass}
      attr={attrs.background}
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
    <FontStyle
      selector={[`${orderClass} h2.dtmc_dynamic_module_title`,
      `${orderClass} h1.dtmc_dynamic_module_title`,
      `${orderClass} h3.dtmc_dynamic_module_title`,
      `${orderClass} h4.dtmc_dynamic_module_title`,
      `${orderClass} h5.dtmc_dynamic_module_title`,
      `${orderClass} h6.dtmc_dynamic_module_title`].join(', ')}
      attr={attrs.titleFont}
      headingLevel="h2"
      important
    />
    <FontBodyStyle
      selector={`${orderClass} .dtmc_dynamic_module_content`}
      attr={attrs.bodyFont}
      important={{
        body: {
          font: {
            desktop: {
              value: {
                color: true,
              },
            },
          },
        },
      }}
    />
    <SpacingStyle
      selector={orderClass}
      attr={attrs.spacing}
      important
    />
    <SizingStyle
      selector={orderClass}
      attr={attrs.sizing}
      propertySelectors={{
        desktop: {
          value: {
            'margin-left': `${orderClass}.et_pb_module`,
            'margin-right': `${orderClass}.et_pb_module`,
          },
        },
      }}
      important={{
        desktop: {
          value: {
            'margin-left': true,
            'margin-right': true,
          },
        },
      }}
    />
    <BorderStyle
      selector={orderClass}
      attr={attrs.border}
    />
    <BoxShadowStyle
      selector={orderClass}
      attr={attrs.boxShadow}
    />
    <FiltersStyle
      selector={orderClass}
      attr={attrs.filter}
    />
    <TransformStyle
      selector={orderClass}
      attr={attrs.transform}
    />
    <AnimationStyle
      selector={orderClass}
      attr={attrs.animation}
    />
    <CssStyle
      selector={orderClass}
      attr={attrs.css}
      cssFields={cssFields}
    />
    <DisabledOnStyle
      selector={orderClass}
      attr={attrs.disabledOn}
      disabledModuleVisibility={settings?.disabledModuleVisibility}
    />
    <OverflowStyle
      selector={orderClass}
      attr={attrs.overflow}
    />
    <PositionStyle
      selector={orderClass}
      attr={attrs.position}
    />
    <ZIndexStyle
      selector={orderClass}
      attr={attrs.zIndex}
    />
  </StyleContainer>
);
