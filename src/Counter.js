import React, { useState } from 'react'

export const Counter = () => {
  const returnValue = useState(0)

  console.log(returnValue)

  return (
    <div>
      <h1>
        0
      </h1>
      <button
        onClick={console.log}
      >+
      </button>
    </div>
  )
}

export default Counter
