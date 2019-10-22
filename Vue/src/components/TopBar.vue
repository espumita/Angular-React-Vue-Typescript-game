<template>
    <div>
        <button id="reset-game-button" v-on:click="resetGame" :class="[{button: true}]">
          Reset
        </button>
        <button id="set-beginner-difficulty-button" v-on:click="setBeginnerDifficulty">
          Beginner
        </button>
        <button  id="set-intermediate-difficulty-button" v-on:click="setIntermediateDifficulty">
          Intermediate
        </button>
        <button  id="set-expert-difficulty-button" v-on:click="setExpertDifficulty">
          Expert
        </button>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { dispatchResetGameAction } from '../actions/resetGame'
import { dispatchSetDifficultyAction } from '../actions/setDifficulty'
import { BeginnerDifficulty, IntermediateDifficulty, ExpertDifficulty } from '../model'

export default Vue.extend({
    name: 'TopBar',
    methods: {
        resetGame() {
            dispatchResetGameAction(this.$store.dispatch)
        },
        setBeginnerDifficulty(){
            dispatchSetDifficultyAction(new BeginnerDifficulty())(this.$store.dispatch)
        },
        setIntermediateDifficulty() {
            dispatchSetDifficultyAction(new IntermediateDifficulty())(this.$store.dispatch)
        },
        setExpertDifficulty() {
            dispatchSetDifficultyAction(new ExpertDifficulty())(this.$store.dispatch)
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