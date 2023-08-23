const {
    useElementScriptData,
  } = window?.divi?.module;
  
  export const ModuleScriptData = ({
    attrs,
    selector,
    id,
  }) => {
    useElementScriptData({
      attrs: attrs?.module?.decoration,
      id,
      selector,
    });
  
    return null;
  }