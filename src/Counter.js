import React, { useState } from 'react'

export const Counter = () => {
  const [currentState, setCurrentState] = useState(5)

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
