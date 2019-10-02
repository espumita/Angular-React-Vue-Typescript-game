import * as React from 'react'
import { connect } from 'react-redux'
import { Store, Mine } from '../store/initialState'

export function Board(props: { theMagicProp: string }) {
    return (
      <div>
        {props.theMagicProp}
      </div>
    )
  }
  
export default connect(
  (state: Store) : { theMagicProp: string} => { return { theMagicProp: state.mines.length.toString()} }
)(Board)