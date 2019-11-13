import { TestBed } from '@angular/core/testing'
import { provideMockStore, MockStore }  from '@ngrx/store/testing'
import { storeBuilder } from './mockStoreBuilder'
import { By } from "@angular/platform-browser"
import { TopBarComponent } from '../src/components/topBar/topBar.component'
import { Store as NgrxStore } from '@ngrx/store'
import { Store } from '../src/store/store'
import { RESET_GAME, SET_DIFFICULTY } from '../src/actions/actionsTypes'
import { BeginnerDifficulty, IntermediateDifficulty, ExpertDifficulty } from '../src/model'

describe('Topbar should', () =>{
  
    test('reset game when click reset button', () =>{
        const store = storeBuilder()
                        .build()
        const wrapper = mountTopBarComponentWith(store)
        const resetButton = wrapper.debugElement.query(By.css('#reset-game-button'))
        const mockStore = getStoreWithMockDispatch()

        resetButton.nativeElement.click()

        expect(mockStore.dispatch).toBeCalledWith({type: RESET_GAME})
    })

    test('change to begginer difficulty and reset game when click on buttom', () =>{
      const store = storeBuilder()
                      .build()
      const wrapper = mountTopBarComponentWith(store)
      const resetButton = wrapper.debugElement.query(By.css('#set-beginner-difficulty-button'))
      const mockStore = getStoreWithMockDispatch()

      resetButton.nativeElement.click()

      expect(mockStore.dispatch).toBeCalledWith({type: SET_DIFFICULTY, newDifficulty: new BeginnerDifficulty()})
      expect(mockStore.dispatch).toBeCalledWith({type: RESET_GAME})
  })

  test('change to intemediate difficulty and reset game when click on buttom', () =>{
    const store = storeBuilder()
                    .build()
    const wrapper = mountTopBarComponentWith(store)
    const resetButton = wrapper.debugElement.query(By.css('#set-intermediate-difficulty-button'))
    const mockStore = getStoreWithMockDispatch()

    resetButton.nativeElement.click()

    expect(mockStore.dispatch).toBeCalledWith({type: SET_DIFFICULTY, newDifficulty: new IntermediateDifficulty()})
    expect(mockStore.dispatch).toBeCalledWith({type: RESET_GAME})
  })

  test('change to expert difficulty and reset game when click on buttom', () =>{
      const store = storeBuilder()
                      .build()
      const wrapper = mountTopBarComponentWith(store)
      const resetButton = wrapper.debugElement.query(By.css('#set-expert-difficulty-button'))
      const mockStore = getStoreWithMockDispatch()

      resetButton.nativeElement.click()

      expect(mockStore.dispatch).toBeCalledWith({type: SET_DIFFICULTY, newDifficulty: new ExpertDifficulty()})
      expect(mockStore.dispatch).toBeCalledWith({type: RESET_GAME})
  })


})

function mountTopBarComponentWith(store: any) {
    TestBed.configureTestingModule({
        declarations: [
          TopBarComponent
        ],
        providers: [
          provideMockStore({ initialState: store })
        ]
      }).compileComponents()
      const fixture = TestBed.createComponent(TopBarComponent)
      fixture.detectChanges()
      return fixture
}

function getStoreWithMockDispatch(){
  const mockStore : MockStore<Store> = TestBed.get<NgrxStore<Store>>(NgrxStore)
  spyOn(mockStore, 'dispatch')
  return mockStore
}