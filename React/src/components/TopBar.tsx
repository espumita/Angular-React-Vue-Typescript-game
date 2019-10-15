import * as React from 'react'
import { useDispatch } from 'react-redux'
import { createResetGameAction } from '../actions/resetGame'
import { createDistpatchSetDifficultyAction } from '../actions/setDifficulty'
import { BeginnerDifficulty, IntermediateDifficulty, ExpertDifficulty } from '../model/index'

const TopBar  = () => {
    const dispatch = useDispatch()
    return (
      <div>
        <button key="reset-game-button" onClick={() => dispatch(createResetGameAction())} style={{ margin: "16px", fontSize: "20px" }}>
          Reset
        </button>
        <button key="set-beginner-difficulty-button" onClick={() => createDistpatchSetDifficultyAction(new BeginnerDifficulty())(dispatch)} style={{ margin: "16px", fontSize: "20px" }}>
          Beginner
        </button>
        <button  key="set-intermediate-difficulty-button" onClick={() => createDistpatchSetDifficultyAction(new IntermediateDifficulty())(dispatch)} style={{ margin: "16px", fontSize: "20px" }}>
          Intermediate
        </button>
        <button  key="set-expert-difficulty-button" onClick={() => createDistpatchSetDifficultyAction(new ExpertDifficulty())(dispatch)} style={{ margin: "16px", fontSize: "20px" }}>
          Expert
        </button>
      </div>
    )
  }

  export default TopBar