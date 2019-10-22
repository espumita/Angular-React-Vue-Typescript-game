<template>
    <div>
        <button id="reset-game-button" v-on:click="resetGame" :class="[{button: true}]">
          Reset
        </button>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { dispatchResetGameAction } from '../actions/resetGame'

export default Vue.extend({
    name: 'TopBar',
    methods: {
        resetGame() {
            dispatchResetGameAction(this.$store.dispatch)
        }
    }
})
</script>

<style scoped>
 .button {
     margin: 16px;
     font-size: 20px;
 }
</style>