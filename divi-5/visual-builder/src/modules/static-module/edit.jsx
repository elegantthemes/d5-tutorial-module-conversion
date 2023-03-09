import { ModuleContainer } from '@divi/module';
import { mergeAttrs } from '@divi/module-utils';

import { ModuleStyles } from './module-styles';
import { ModuleScriptData } from './module-script-data';
import { moduleClassnames } from './module-classnames';
import { defaultAttrs } from './constants';

export const StaticModuleEdit = ({
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
  const content = moduleAttrs?.content?.desktop?.value ?? '';

  return (
    <ModuleContainer
      attrs={moduleAttrs}
      id={id}
      name={name}
      scriptDataComponent={ModuleScriptData}
      stylesComponent={ModuleStyles}
      classnamesFunction={moduleClassnames}
    >
      <div className="et_pb_module_inner">
        <HeaderLevel className="dtmc_static_module_title">{title}</HeaderLevel>
        <div
          className="dtmc_static_module_content"
          dangerouslySetInnerHTML={{__html: content}}
        />
      </div>
    </ModuleContainer>
  );
}