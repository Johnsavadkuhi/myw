import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'
import "./index.css"
 function Counter() {

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div >
      <div>
        <button  className= "btn inc "
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment 
        </button>
        <span className="text">{count}</span>
        <button className= "btn dec "
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
} 

export default Counter  ; 