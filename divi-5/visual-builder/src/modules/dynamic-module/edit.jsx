import { useEffect } from 'react';

import { ModuleStyles } from './module-styles';
import { ModuleScriptData } from './module-script-data';
import { moduleClassnames } from './module-classnames';

const { useFetch } = window?.divi?.rest;
const { getAttrByMode } = window?.divi?.moduleUtils;
const { ModuleContainer } = window?.divi?.module;

/**
 * Edit component for Dynamic Module.
 */
export const DynamicModuleEdit = ({
  attrs,
  elements,
  id,
  name,
}) => {

  const title = getAttrByMode(attrs?.title?.innerContent);

  const {
    fetch,
    response,
    isLoading,
  } = useFetch('');

  useEffect(() => {
    // Fetching data from REST API.
    fetch({
      method:    'GET',
      restRoute: '/dtmc/v1/module-data/dynamic-module',
      data:      {
        title,
      },
    }).catch(error => {
      console.log(error);
    });
  }, [title]);

  return (
    <ModuleContainer
      attrs={attrs}
      elements={elements}
      id={id}
      name={name}
      scriptDataComponent={ModuleScriptData}
      stylesComponent={ModuleStyles}
      classnamesFunction={moduleClassnames}
    >
      {elements.styleComponents({
        attrName: 'module',
      })}
      <div>
        {elements.render({
          attrName: 'title',
        })}
        {isLoading && <div>Loading...</div>}
        {!isLoading && (
          <div
            className="dtmc_dynamic_module_content"
            dangerouslySetInnerHTML={{ __html: response?.data ?? '' }}
          />
        )}
      </div>
    </ModuleContainer>
  );
}