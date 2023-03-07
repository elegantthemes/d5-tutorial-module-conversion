import metadata from './module.json';

const { __ } = wp.i18n;

const customCssFields = metadata.customCssFields;

// Add label to custom CSS fields for Visual Builder
customCssFields.title.label   = __('Title', 'd5-tutorial-module-conversion');

export const cssFields = { ...customCssFields };
