import React, { useState } from 'react'

export const Counter = () => {
  const returnValue = useState(5)

  const currentState = returnValue[0]
  const setCurrentState = returnValue[1]

  console.log(currentState, setCurrentState)

  window.setCurrentState = setCurrentState

  return (
    <div>
      <h1>
        {currentState}
      </h1>
      <button
        onClick={console.log}
      >+
      </button>
    </div>
  )
}

export default Counter
