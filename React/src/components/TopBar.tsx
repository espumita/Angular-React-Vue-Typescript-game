import * as React from 'react'
import { useDispatch } from 'react-redux'
import { createResetGameAction } from '../actions/resetGame'

const TopBar  = () => {
    const dispatch = useDispatch()
    return (
      <div>
        <button onClick={() => dispatch(createResetGameAction())} style={{ margin: "16px", fontSize: "20px" }}>
          Reset
        </button>
      </div>
    )
  }

  export default TopBar