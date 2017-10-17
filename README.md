# react-pure-stateless-component [![NPM version][npm-image]][npm-url]

Pure React stateless component

[![Dependency Status][daviddm-image]][daviddm-url]

## Why this package ?

A React component's render function is "pure" when it renders the same result given the same props and state.
You can use this for a performance boost in some cases.

Under the hood, this wrap the stateless component into a class component implementing `shouldComponentUpdate`,
in which it shallowly compares the current props with the next one and returns false if the equalities pass.

## Stateless components are not pure ?

Not always. That's why react can't do pure optimisations by default on them.

Example of an unpure stateless component:

```js
const Clock = () => <div>{Date.time()}</div>
```

An unpure component can also be called inside a stateless component.

## When not to use ?

- If you don't need perf optimisations.
- If you use [react-redux](https://www.npmjs.com/package/react-redux), you can use [connect](https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options) to make the component pure.

## Install

```sh
npm install --save react-pure-stateless-component
```

## How to use

```js
import React, { PropTypes } from 'react';
import createPureStatelessComponent from 'react-pure-stateless-component';

export default createPureStatelessComponent({
    displayName: 'MyStatelessComponent',

    propTypes: {
        i: PropTypes.number,
    },

    render({ i }) {
        return <div>{i}</div>;
    }
});
```

You can also pass a existing stateless component:

```js
import React, { PropTypes } from 'react';
import createPureStatelessComponent from 'react-pure-stateless-component';

const propTypes = { i: PropTypes.number };

const MyStatelessComponent = ({ i }) => {
  return <div>{i}</div>;
};

MyStatelessComponent.propTypes = propTypes;

export default createPureStatelessComponent(MyStatelessComponent);
```

## Similar libraries

- [react-pure-stateless](https://www.npmjs.com/package/react-pure-stateless)


[npm-image]: https://img.shields.io/npm/v/react-pure-stateless-component.svg?style=flat-square
[npm-url]: https://npmjs.org/package/react-pure-stateless-component
[daviddm-image]: https://david-dm.org/christophehurpeau/react-pure-stateless-component.svg?style=flat-square
[daviddm-url]: https://david-dm.org/christophehurpeau/react-pure-stateless-component
