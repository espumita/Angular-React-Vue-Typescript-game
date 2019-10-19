<template>
  <div :class="[{root: true}]">
    <div :class="[{board: true}]">
      <div v-for="rowNumber in rangeOf(rows)">
        <div v-bind:key="`cell-row-${rowNumber}`" >
          <div v-for="columnNumber in rangeOf(columns)">
            <Cell :position="position(rowNumber, columnNumber)" :type="getCellType(position(rowNumber, columnNumber))" @cellCliked="cellClikedAction" v-bind:key="`cell-${rowNumber}-${columnNumber}`"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Cell from './Cell.vue';
import { Position, CellType, Difficulty, Mines, PerimeterCell, GameState } from '../model'
import { START_GAME } from '../actions/actionsTypes'

export default Vue.extend({
  name: 'Board',
  components: {
    Cell
  },
  methods: {
    cellClikedAction (args: any[]) {
      const gameClickAction = this.getGameClickAction(this.$store.state.gameState, () => {})
      const action = this.getCellClickAction(args[1], gameClickAction)
      action(args[0])
    },
    position(x: number, y: number){
      return new Position(x, y)
    },
    rangeOf(size: number) : number[] {
      return [...Array(size).keys()]
    },
    getCellType(position: Position){
      const showableCells = this.$store.state.showableCells
      const mines : Mines = this.$store.state.mines
      if (this.isNotShowable(position, showableCells)) return CellType.None
      if (this.isMine(position, mines.positions)) return CellType.Mine
      if (this.isPerimeterCell(position, mines.perimeterCells))  {
          const perimeterCell = mines.perimeterCells.find(x => position.sameAs(x.position))
          if (perimeterCell) return perimeterCell.cellType()
      }
      return CellType.EmptyCell
    },
    isNotShowable(position: Position, showableCells : Position[]) {
      return !showableCells.some(x => position.sameAs(x))
    },
    isMine(position: Position, minesPositions : Position[]) {
      return minesPositions.some(x => x.sameAs(position))
    },
    isPerimeterCell(position: Position, perimeterCell : PerimeterCell[]) {
      return perimeterCell.some(x => x.position.sameAs(position))
    },
    getGameClickAction(gameState : GameState, dispatch: Function) : Function {
      if (gameState === GameState.NotStarted) return (position: Position) => this.$store.dispatch(START_GAME, position)//console.log('distpatchCreateStartGameAction')//distpatchCreateStartGameAction(position)(dispatch)
      return (position: Position) => console.log('dispatchCreateMakeMovementAction')//dispatchCreateMakeMovementAction(position)(dispatch)
    },
    getCellClickAction(type : CellType, clickAction: Function): Function {
      if(type === CellType.None) return clickAction
      return () => {}
    }
  },
  computed: {
    rows(){
      const difficulty : Difficulty = this.$store.state.difficulty
      return difficulty.boardWidth
    },
    columns(){
      const difficulty : Difficulty = this.$store.state.difficulty
      return difficulty.boardHeight
    }
  }
});
</script>

<style>
.root {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.board {
  display: flex;
}
</style>
