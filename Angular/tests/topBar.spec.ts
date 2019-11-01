import { TestBed } from '@angular/core/testing'
import { provideMockStore, MockStore }  from '@ngrx/store/testing'
import { storeBuilder } from './mockStoreBuilder'
import { By } from "@angular/platform-browser"
import { TopBarComponent } from '../src/components/topBar/topBar.component'
import { Store as NgrxStore } from '@ngrx/store'
import { Store } from '../src/store/store'
import { RESET_GAME } from '../src/actions/actionsTypes'

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