import { useEffect } from 'react';

import { ModuleContainer } from '@divi/module'; // ModuleContainer is a component that wraps the module's edit component.
import { mergeAttrs } from '@divi/module-utils';

import { ModuleStyles } from './module-styles';
import { ModuleScriptData } from './module-script-data';
import { useModuleData } from './hooks/use-module-data';
import { moduleClassnames } from './module-classnames';
import { defaultAttrs } from './constants';

/**
 * Edit component for Dynamic Module.
 */
export const DynamicModuleEdit = ({
  attrs,
  id,
  name,
}) => {
  const moduleAttrs = mergeAttrs({
    defaultAttrs,
    attrs,
  });

  const HeaderLevel = moduleAttrs?.titleFont?.font?.desktop?.value?.headingLevel ?? 'h2';
  const title = moduleAttrs?.title?.desktop?.value ?? '';

  const { getModuleData, moduleData, isLoading, } = useModuleData();

  useEffect(() => {
    getModuleData(title)
  }, [title]);

  return (
    <ModuleContainer
      attrs={moduleAttrs}
      id={id}
      name={name}
      scriptDataComponent={ModuleScriptData}
      stylesComponent={ModuleStyles}
      classnamesFunction={moduleClassnames}
    >
      <div>
        <HeaderLevel className="dtmc_dynamic_module_title">{title}</HeaderLevel>
        {isLoading && <div>Loading...</div>}
        {!isLoading && (
          <div
            className="dtmc_dynamic_module_content"
            dangerouslySetInnerHTML={{ __html: moduleData }}
          />
        )}
      </div>
    </ModuleContainer>
  );
}