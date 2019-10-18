<template>
  <div @click="clickAction"  :class="[{mineColor: isMine}, {noneColor: isNone}, {otherColor: isOther}]">
    <div>{{type}}</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Position, CellType } from '../model'

export default Vue.extend({
  name: 'Cell',
  props: {
    position: { type: Position, required: true },
    type: { type: Number, required: true }
  },
  methods: {
    clickAction(){
      this.$emit('cellCliked')
    }
  },
  computed: {
    isMine() {
      return this.type === CellType.Mine
    },
    isNone() {
      return this.type === CellType.None
    },
    isOther() {
      return this.type !== CellType.None && this.type !== CellType.Mine
    },
    getNumber() {
      if (this.type === CellType.OneMineClose) return '1'
      if (this.type === CellType.TwoMinesClose) return '2'
      if (this.type === CellType.TreeMinesClose) return '3'
      if (this.type === CellType.FourMinesClose) return '4'
      if (this.type === CellType.FiveMinesClose) return '5'
      if (this.type === CellType.SixMinesClose) return '6'
      if (this.type === CellType.SevenMinesClose) return '7'
      if (this.type === CellType.EightMinesClose) return '8'
      return ''
    }
  }
})
</script>

<style scoped>
  .mineColor { background-color: red; }
  .noneColor { background-color: grey; }
  .otherColor { background-color: yellow; }
  .cell {
    display: flex;
    align-items: center;
    justify-content: content;
    width: 40px;
    height: 40px;
    border-color: black;
    border-style: solid;
    border-width: 1px;
  }
</style>
