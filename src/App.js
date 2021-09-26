import React from 'react'

import Counter from './Counter'
import CounterClass from './CounterClass'

export const App = () => {
  const [isVisible, setIsVisible] = React.useState(true)

  return (
    <div>
      <button
        onClick={() => setIsVisible(!isVisible)}
      >
        {
          isVisible ?
            'Hide'
            :
            'Show'
        }
      </button>
      {
        isVisible ?
          <>
            <h2>
              Hooks
            </h2>
            <Counter />
            {/* <Counter
              startNumber={3}
            /> */}
            <h2>
              Class
            </h2>
            <CounterClass />
            {/* <CounterClass
              startNumber={3}
            /> */}
          </>
          :
          null
    }
    </div>
  )
}

export default App
