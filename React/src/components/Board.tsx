import * as React from 'react'
import { connect } from 'react-redux'
import { Store, Mine } from '../store/initialState'

function Board(props: { mines: Mine[] }) {
    return (
      <div>
        {props.mines.map((mine, key) =>
          <div>{key}</div>
        )}
      </div>
    )
  }
  
  export default connect(
    (state: Store) : { mines: Mine[] } => { return { mines: state.mines } }
  )(Board)