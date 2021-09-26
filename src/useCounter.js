import React from 'react'

export const useCounter = () => {
  const [number, setNumber] = React.useState(5)

  const inc = () => setNumber(number + 1)
  const dec = function () { setNumber(number - 1) }

  return {
    number,
    inc,
    dec
  }
}
