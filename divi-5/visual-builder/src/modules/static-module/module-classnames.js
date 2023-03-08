const {
  animationClassnames,
  textOptionsClassnames,
} = window?.divi?.module;

export const moduleClassnames = ({
  classnamesInstance,
  attrs,
}) => {
  // Text Options.
  classnamesInstance.add(textOptionsClassnames(attrs?.text, { orientation: false }));

  // Animation Options.
  classnamesInstance.add(animationClassnames(attrs?.animation));
}