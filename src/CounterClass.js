import React from 'react'

export class CounterClass extends React.Component {
  state = {
    number: 5
  }

  inc = () => this.setState((prevState) => ({ number: prevState.number + 1 }))
  dec = () => this.setState((prevState) => ({ number: prevState.number - 1 }))

  render () {
    const { number } = this.state

    return (
      <>
        <h1>
          {number}
        </h1>
        <button
          onClick={this.inc}
        >
          +
        </button>
        <button
          onClick={this.dec}
        >
          -
        </button>
      </>
    )
  }
}

export default CounterClass
