import { useEffect } from 'react';

import { ModuleStyles } from './module-styles';
import { ModuleScriptData } from './module-script-data';
import { useModuleData } from './hooks/use-module-data';
import { moduleClassnames } from './module-classnames';


const { ModuleContainer } = divi.module; // ModuleContainer is a component that wraps the module's edit component.

/**
 * Edit component for Dynamic Module.
 */
export const DynamicModuleEdit = ({
  attrs,
  id,
  name,
}) => {
  const HeaderLevel = attrs?.titleFont?.font?.desktop?.value?.headingLevel ?? 'h2';
  const title       = attrs?.title?.desktop?.value ?? '';

  const { getModuleData, moduleData, isLoading, } = useModuleData();

  useEffect(() => {
    getModuleData(title)
  }, [title]);

  return (
    <ModuleContainer
      attrs={attrs}
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