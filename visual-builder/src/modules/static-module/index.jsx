// External Dependencies
import React, { Component } from 'react';

/**
 * Component for rendering Static module in visual builder.
 *
 * @since ??
 */
class DTMCStaticModule extends Component {
  static slug = 'dtmc_static_module';

  render() {
    const HeaderLevel = this.props.header_level ? this.props.header_level : 'h2';

    return (
      <div>
        <HeaderLevel className="dtmc_static_module_title">{this.props.title}</HeaderLevel>
        <div className="dtmc_static_module_content">{this.props.content()}</div>
      </div>
    );
  }
}

export default DTMCStaticModule;
