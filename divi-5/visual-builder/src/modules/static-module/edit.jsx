import { ModuleStyles } from './module-styles';
import { ModuleScriptData } from './module-script-data';
import { moduleClassnames } from './module-classnames';

const { ModuleContainer } = divi.module;

export const StaticModuleEdit = ({
  attrs,
  id,
  name,
}) => {
  const HeaderLevel = attrs?.titleFont?.font?.desktop?.value?.headingLevel ?? 'h2';
  const title       = attrs?.title?.desktop?.value ?? '';
  const content     = attrs?.content?.desktop?.value ?? '';

  return (
    <ModuleContainer
      attrs={attrs}
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