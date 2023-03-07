import { useEffect } from 'react';

import { useModuleData } from './hooks/use-module-data';

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