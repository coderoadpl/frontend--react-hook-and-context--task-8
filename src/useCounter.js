import React from 'react'

export const useCounter = (startNumber) => {
  const [number, setNumber] = React.useState(startNumber || 0)

  const inc = () => setNumber(number + 1)
  const dec = function () { setNumber(number - 1) }

  return {
    number,
    inc,
    dec
  }
}
