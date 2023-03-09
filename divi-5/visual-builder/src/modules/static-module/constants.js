import { __ } from '@wordpress/i18n';

import { mergeAttrs } from '@divi/module-utils';

/**
 * Default attributes. Default attributes that are needed on rendered module
 * as well on the module's settings modal.
 */
export const defaultAttrs = {
  adminLabel: {
    desktop: {
      value: __('DTMC Static Module', 'd5-tutorial-module-conversion'),
    },
  },
  text: {
    text: {
      desktop: {
        value: {
          color: 'light',
        },
      },
    },
  },
  titleFont: {
    font: {
      desktop: {
        value: {
          headingLevel: 'h2',
        },
      },
    },
  },
};

/**
 * Default attributes that is inferred from module's static style. Rendered module doesn't
 * need this because static style already executes style that resulting identical output should
 * these attributes are being rendered.
 */
export const defaultPrintedStyleAttrs = {};

/**
 * Combination of default attributes and defaults that are inferred from printed style attributes
 * that are needed by module's setting modal to render correct `defaultValue`.
 */
export const defaultSettingsAttrs = mergeAttrs({
  defaultAttrs,
  attrs: defaultPrintedStyleAttrs,
});
