var createClass = require('react').createClass;
var shallowEqual = require('fbjs/lib/shallowEqual');

module.exports = function createPureStatelessComponent(statelessComponent) {
  if (typeof statelessComponent === 'function') {
    statelessComponent = {
      displayName: statelessComponent.name,
      propTypes: statelessComponent.propTypes,
      contextTypes: statelessComponent.contextTypes,
      render: statelessComponent,
    };
  }

  const displayName = statelessComponent.displayName || statelessComponent.name;

  if (process.env.NODE_ENV !== 'production') {
      if (!displayName) {
        throw new Error('Invalid displayName');
      }
  }

  return createClass({
    displayName: displayName,
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
