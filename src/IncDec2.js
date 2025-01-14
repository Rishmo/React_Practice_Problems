// Code for Increment and Decrement using useState

import React, {useState} from 'react'

const IncDec2 = () => {

    const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() =>setCount(count + 1)}> + </button>
      <span> { count } </span>
      <button onClick={() =>setCount(count - 1)}> - </button>
    </div>
  )
}

export default IncDec2
