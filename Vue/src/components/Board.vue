<template>
  <div :class="[{board: true}]">
    <div v-for="rowNumber in rangeOf(rows)" v-bind:key="`cell-row-${rowNumber}`">
      <div v-for="columnNumber in rangeOf(columns)" v-bind:key="`cell-${rowNumber}-${columnNumber}`">
        <Cell :position="position(rowNumber, columnNumber)" :type="getCellType(position(rowNumber, columnNumber))" @cellCliked="cellClikedAction" :id="`cell-${rowNumber}-${columnNumber}`"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Cell from './Cell.vue'
import { Position, CellType, Difficulty, Mines, PerimeterCell, GameState } from '../model'
import { distpatchCreateStartGameAction } from '../actions/startGame'
import { dispatchCreateMakeMovementAction } from '../actions/makeMovement'

export default Vue.extend({
  name: 'Board',
  components: {
    Cell
  },
  methods: {
    cellClikedAction (args: any[]) {
      const gameClickAction = this.getGameClickAction(this.$store.state.gameState.state, () => {})
      const action = this.getCellClickAction(args[1], gameClickAction)
      action(args[0])
    },
    getGameClickAction(gameState : GameState, dispatch: Function) : Function {
      if (gameState === GameState.NotStarted) return (position: Position) => distpatchCreateStartGameAction(position)(this.$store.dispatch)
      return (position: Position) => dispatchCreateMakeMovementAction(position)(this.$store.dispatch)
    },
    getCellClickAction(type : CellType, clickAction: Function): Function {
      if(type === CellType.None) return clickAction
      return () => {}
    },
    rangeOf(size: number) : number[] {
      return [...Array(size).keys()]
    },
    position(x: number, y: number){
      return new Position(x, y)
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
})
</script>

<style scoped>
.board {
  display: flex;
}
</style>
