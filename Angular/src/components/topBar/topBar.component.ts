import { Component } from '@angular/core'
import { BeginnerDifficulty, IntermediateDifficulty, ExpertDifficulty } from '../../model'
import { Store as NgrxStore } from '@ngrx/store'
import { Store } from '../../store/store'
import { createResetGameAction } from 'src/actions/resetGame'
import { createSetDifficultyAction } from 'src/actions/setDifficulty'

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
        this.store.dispatch(createSetDifficultyAction(new BeginnerDifficulty()))
        this.store.dispatch(createResetGameAction())
    }
    setIntermediateDifficulty() {
        this.store.dispatch(createSetDifficultyAction(new IntermediateDifficulty()))
        this.store.dispatch(createResetGameAction())
    }
    setExpertDifficulty() {
        this.store.dispatch(createSetDifficultyAction(new ExpertDifficulty()))
        this.store.dispatch(createResetGameAction())
    }

}
