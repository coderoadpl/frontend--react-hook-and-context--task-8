import React from 'react'

export class CounterClass extends React.Component {
  state = {
    number: 5
  }

  setNumber = (newNumber) => {
    this.setState(() => ({ number: newNumber }))
  }

  render () {
    const { number } = this.state

    return (
      <>
        <h1>
          {number}
        </h1>
        <button
          onClick={() => this.setNumber(number + 1)}
        >
          +
        </button>
        <button
          onClick={() => this.setNumber(number - 1)}
        >
          -
        </button>
      </>
    )
  }
}

export default CounterClass
