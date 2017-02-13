import React, { Component, PropTypes } from 'react'
import createPureStatelessComponent from '../../index'
import './App.css'

const SomeChildComponent = createPureStatelessComponent({
  displayName: 'MyStatelessComponent',
  propTypes: {
    value: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired
  },
  render({ value, handleClick }) {
    console.log('onClick function created.')
    const onClick = e => {
      handleClick(value)
    }

    return (
      <div onClick={onClick} className='simple-button'>
        {`Click Here ${value}`}
      </div>
    );
  }
})

class App extends Component {
  state = {
    clickedDivs: ''
  }

  handleClick = (value) => {
    const {clickedDivs} = this.state
    const separator = !clickedDivs ? '' : ', '
    this.setState({clickedDivs: clickedDivs + separator + value})
  }

  render() {
    const {clickedDivs} = this.state

    return (
      <div>
        {['a', 'b', 'c'].map((value, index) =>
          <SomeChildComponent
            key={index}
            value={value}
            handleClick={this.handleClick}
          />
        )}
        <div key="clicked-divs">{clickedDivs}</div>
      </div>
    )
  }
}

export default App;
