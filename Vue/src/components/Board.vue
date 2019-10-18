<template>
  <div v-for="row in ">
      <Cell :position="examplePosition" :type="exampleCellType" @cellCliked="cellClikedAction"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Cell from './Cell.vue';
import { Position, CellType } from '../model'

export default Vue.extend({
  name: 'Board',
  components: {
    Cell
  },
  methods: {
    cellClikedAction (value: any) {
      console.log("Do action") // someValue
    }
  },
  computed: {
    examplePosition(){
      return new Position(0, 0)
    },
    exampleCellType(){
      return 3
    },
  }
});
</script>

<style>

</style>
