import { Component } from '@angular/core'
import { BeginnerDifficulty, IntermediateDifficulty, ExpertDifficulty } from '../../model'
import { Store as NgrxStore } from '@ngrx/store'
import { Store } from '../../store/store'
import { createResetGameAction } from 'src/actions/resetGame'

@Component({
  selector: 'TopBar',
  templateUrl: './topBar.component.html',
  styleUrls: ['./topBar.component.css'],
})

export class TopBarComponent {

    constructor(private store: NgrxStore<Store>){
    }
    resetGame() {
        this.store.dispatch(createResetGameAction())
    }
    setBeginnerDifficulty(){
         this.store.dispatch(createResetGameAction())
        //dispatchSetDifficultyAction(new BeginnerDifficulty())(this.$store.dispatch)
    }
    setIntermediateDifficulty() {
        this.store.dispatch({ type: ""})
        //dispatchSetDifficultyAction(new IntermediateDifficulty())(this.$store.dispatch)
    }
    setExpertDifficulty() {
        this.store.dispatch({ type: ""})
        //dispatchSetDifficultyAction(new ExpertDifficulty())(this.$store.dispatch)
    }

}
