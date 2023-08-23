// External Dependencies
import React, { Component } from 'react';

/**
 * Component for rendering Dynamic module in visual builder.
 *
 * @since 1.0.0
 */
class DTMCDynamicModule extends Component {
  static slug = 'dtmc_dynamic_module';

  render() {
    const HeaderLevel = this.props.header_level ? this.props.header_level : 'h2';

    return (
      <div>
        <HeaderLevel className="dtmc_dynamic_module_title">{this?.props?.title}</HeaderLevel>
        <div
          className="dtmc_dynamic_module_content"
          dangerouslySetInnerHTML={{ __html: this?.props?.__content }}
        />
      </div>
    );
  }
}

export default DTMCDynamicModule;