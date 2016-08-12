var React = require('react');
var shallowEqual = require('fbjs/lib/shallowEqual');

module.exports = function createPureStatelessComponent(statelessComponent) {
  if (typeof statelessComponent === 'function') {
    statelessComponent = {
      propTypes: statelessComponent.propTypes,
      contextTypes: statelessComponent.contextTypes,
      render: statelessComponent,
    };
  }

  return React.createClass({
    propTypes: statelessComponent.propTypes,
    contextTypes: statelessComponent.contextTypes,

    shouldComponentUpdate: function(nextProps) {
      return !shallowEqual(this.props, nextProps);
    },

    render: function() {
      return statelessComponent.render(this.props, this.context);
    }
  });
};
