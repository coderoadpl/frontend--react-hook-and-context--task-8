export const makeInitialState = function (props) {
  return {
    number: props.startNumber || 0
  }
}

export const inc = function () {
  this.setState((prevState) => ({ number: prevState.number + 1 }))
}

export const dec = function () {
  this.setState((prevState) => ({ number: prevState.number - 1 }))
}
