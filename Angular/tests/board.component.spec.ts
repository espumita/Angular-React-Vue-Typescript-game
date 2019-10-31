import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from "@angular/platform-browser";
import { storeBuilder } from './mockStoreBuilder'
import { BoardComponent } from '../src/components/board/board.component';
import { CellComponent } from '../src/components/cell/cell.component';
import { BeginnerDifficulty, IntermediateDifficulty, GameState } from '../src/model'
import { provideMockStore }  from '@ngrx/store/testing'
import { Store } from '../src/store/store'

describe('Board should', () => {

  beforeEach(async(() => {
    const initialState : Store = {
      difficulty: new BeginnerDifficulty(),       
      gameState: GameState.NotStarted,
      mines: { positions: [], perimeterCells: [] },
      showableCells: []
    }
    TestBed.configureTestingModule({
      declarations: [
        BoardComponent,
        CellComponent
      ],
      providers: [
        provideMockStore({ initialState})
      ]
    }).compileComponents();
  }))

  test('have 8 x 8 cells in beginner difficulty', () => {
    const store = storeBuilder()
                    .withDifficulty(new BeginnerDifficulty())
                    .build()

    const wrapper = mountBoardComponentWith(store)

    const cells = wrapper.debugElement.queryAll(By.directive(CellComponent))
    expect(cells.length).toBe(64)
  })

  test('have 16 x 16 cells in intermediate difficulty', () => {
    const store = storeBuilder()
                    .withDifficulty(new IntermediateDifficulty())
                    .build()

    const wrapper = mountBoardComponentWith(store)

    const cells = wrapper.debugElement.queryAll(By.directive(CellComponent))
    expect(cells.length).toBe(256)
  })

})

function mountBoardComponentWith(store: any) {
  //return mount(Board, { store, localVue })
  const fixture = TestBed.createComponent(BoardComponent);
  const component = fixture.componentInstance;
  fixture.detectChanges();
  return fixture
}