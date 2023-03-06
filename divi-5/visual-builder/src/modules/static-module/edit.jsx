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