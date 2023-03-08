import React from 'react';

const {
  useStickyScriptDataContainer,
} = window?.divi?.module || {};

export const ModuleScriptData = ({
  attrs,
  selector,
  id,
}) => {
  useStickyScriptDataContainer({
    affectingAttrs: {
      position: attrs?.position,
      sizing: attrs?.sizing,
    },
    attr: attrs?.sticky,
    id,
    selector,
  });

  return null;
}