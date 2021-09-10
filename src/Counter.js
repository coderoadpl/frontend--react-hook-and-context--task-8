import React, { useState } from 'react'

export const Counter = () => {
  const [number, setNumber] = useState(5)

  console.log('RENDER')

  return (
    <div>
      <h1>
        {number}
      </h1>
      <button
        onClick={() => setNumber((prevValue) => prevValue + 1)}
      >+
      </button>
    </div>
  )
}

export default Counter
