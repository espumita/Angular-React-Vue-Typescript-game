<template>
    <div :class="[{root: true}]">
        <TopBar/>
        <Board/>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TopBar from './TopBar.vue'
import Board from './Board.vue'

export default Vue.extend({
    name: 'Root',
    components: {
        TopBar,
        Board
    }
})
</script>

<style scoped>
.root {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>