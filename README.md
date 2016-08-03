# react-pure-stateless-component [![NPM version][npm-image]][npm-url]

Pure React stateless component

[![Dependency Status][daviddm-image]][daviddm-url]

## Install

```sh
npm install --save react-pure-stateless-component
```

## How to use

```js
import React, { PropTypes } from 'react';
import createPureStatelessComponent from 'react-pure-stateless-component';

export default createPureStatelessComponent(
  { i: PropTypes.number }, // propTypes
  ({ i }) => <div>{i}</div>
)
```

```js
import React, { PropTypes } from 'react';
import createPureStatelessComponent from 'react-pure-stateless-component';


MyStatelessComponent.propTypes = { i: PropTypes.number };

function MyStatelessComponent({ i }) {
  return <div>{i}</div>;
}

export default createPureStatelessComponent(MyStatelessComponent)
```

[npm-image]: https://img.shields.io/npm/v/react-pure-stateless-component.svg?style=flat-square
[npm-url]: https://npmjs.org/package/react-pure-stateless-component
[daviddm-image]: https://david-dm.org/christophehurpeau/react-pure-stateless-component.svg?style=flat-square
[daviddm-url]: https://david-dm.org/christophehurpeau/react-pure-stateless-component
