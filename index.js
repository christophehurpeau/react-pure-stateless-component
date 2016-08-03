var React = require('react');
var shallowEqual = require('fbjs/lib/shallowEqual');

module.exports = function createPureStatelessComponent(propTypes, contextTypes, renderFunction) {
  if (typeof propTypes === 'function') {
    renderFunction = propTypes;
    propTypes = undefined;
  } else if (typeof contextTypes === 'function') {
    renderFunction = contextTypes;
    contextTypes = undefined;
  }

  return React.createClass({
    propTypes: propTypes,
    contextTypes: contextTypes,

    shouldComponentUpdate: function(nextProps) {
      return !shallowEqual(this.props, nextProps);
    },

    render: function() {
      return renderFunction(this.props, this.context);
    }
  });
};
