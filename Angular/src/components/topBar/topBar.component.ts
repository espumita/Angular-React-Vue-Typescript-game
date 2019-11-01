import { Component } from '@angular/core'
import { BeginnerDifficulty, IntermediateDifficulty, ExpertDifficulty } from '../../model'
import { Store as NgrxStore } from '@ngrx/store'
import { Store } from '../../store/store'
import { createResetGameAction } from 'src/actions/resetGame'
import { createDistpatchSetDifficultyAction } from 'src/actions/setDifficulty'

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
        createDistpatchSetDifficultyAction(new BeginnerDifficulty())(this.store.dispatch)
    }
    setIntermediateDifficulty() {
        createDistpatchSetDifficultyAction(new IntermediateDifficulty())(this.store.dispatch)
    }
    setExpertDifficulty() {
        createDistpatchSetDifficultyAction(new ExpertDifficulty())(this.store.dispatch)
    }

}
