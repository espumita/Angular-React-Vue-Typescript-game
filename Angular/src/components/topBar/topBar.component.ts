import { Component } from '@angular/core'
import { BeginnerDifficulty, IntermediateDifficulty, ExpertDifficulty } from '../../model'
import { Store as NgrxStore } from '@ngrx/store'
import { Store } from '../../store/store'

@Component({
  selector: 'TopBar',
  templateUrl: './topBar.component.html',
  styleUrls: ['./topBar.component.css'],
})

export class TopBarComponent {

    constructor(private store: NgrxStore<Store>){
    }
    resetGame() {
        this.store.dispatch({ type: ""})
        //dispatchResetGameAction(this.$store.dispatch)
    }
    setBeginnerDifficulty(){
         this.store.dispatch({ type: ""})
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
