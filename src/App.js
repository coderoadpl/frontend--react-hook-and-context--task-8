import React from 'react'

import Counter from './Counter'
import CounterClass from './CounterClass'

export const App = () => {
  return (
    <div>
      <h2>
        Hooks
      </h2>
      <Counter />
      <Counter
        startNumber={3}
      />
      <h2>
        Class
      </h2>
      <CounterClass />
      <CounterClass
        startNumber={3}
      />
    </div>
  )
}

export default App
