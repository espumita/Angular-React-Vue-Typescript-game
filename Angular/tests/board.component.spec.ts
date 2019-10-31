import { TestBed } from '@angular/core/testing';
import { By } from "@angular/platform-browser";
import { storeBuilder } from './mockStoreBuilder'
import { BoardComponent } from '../src/components/board/board.component'
import { CellComponent } from '../src/components/cell/cell.component'
import { BeginnerDifficulty, IntermediateDifficulty, ExpertDifficulty, GameState, Position } from '../src/model'
import { provideMockStore, MockStore }  from '@ngrx/store/testing'
import { Store as  NgrxStore } from '@ngrx/store'
import { Store } from '../src/store/store'
import { START_GAME, MAKE_MOVEMENT } from 'src/actions/actionsTypes';


describe('Board should', () => {

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

  test('have 30 x 16 cells in expert difficulty', () =>{
    const store = storeBuilder()
                    .withDifficulty(new ExpertDifficulty())
                    .build()

    const wrapper = mountBoardComponentWith(store)

    const cells = wrapper.debugElement.queryAll(By.directive(CellComponent))
    expect(cells.length).toBe(480)
  })

  test('game start when click in the first cell', () =>{
    const store = storeBuilder()
                    .withGameState(GameState.NotStarted)
                    .build()
    const wrapper = mountBoardComponentWith(store)
    const mockStore = getStoreWithMockDispatch()
    const aCell = wrapper.debugElement.query(By.directive(CellComponent))

    aCell.componentInstance.clickAction()

    expect(mockStore.dispatch).toBeCalledWith({type: START_GAME, position: expect.any(Position)})
  })

  test('game only start once', () =>{
    const store = storeBuilder()
                    .withGameState(GameState.Started)
                    .build()
    const wrapper = mountBoardComponentWith(store)
    const mockStore = getStoreWithMockDispatch()
    const aCell = wrapper.debugElement.query(By.directive(CellComponent))

    aCell.componentInstance.clickAction()

    expect(mockStore.dispatch).not.toHaveBeenCalledWith({type: START_GAME, position: expect.any(Position)})
    expect(mockStore.dispatch).toHaveBeenCalledWith({type: MAKE_MOVEMENT, position: expect.any(Position)})
  })

  test('do not do nothing when click on a showed cell', () => {
    const store = storeBuilder()
                    .withGameState(GameState.Started)
                    .withShowableCell(new Position(0, 0))
                    .build()
    const wrapper = mountBoardComponentWith(store)
    const mockStore = getStoreWithMockDispatch()
    const aCell = wrapper.debugElement.query(By.directive(CellComponent))

    aCell.componentInstance.clickAction()

    expect(mockStore.dispatch).not.toHaveBeenCalled()
  }) 


})

function mountBoardComponentWith(store: any) {
  TestBed.configureTestingModule({
    declarations: [
      BoardComponent,
      CellComponent
    ],
    providers: [
      provideMockStore({ initialState: store })
    ]
  }).compileComponents();
  const fixture = TestBed.createComponent(BoardComponent);
  fixture.detectChanges();
  return fixture
}

function getStoreWithMockDispatch(){
  const mockStore : MockStore<Store> = TestBed.get<NgrxStore<Store>>(NgrxStore)
  spyOn(mockStore, 'dispatch')
  return mockStore
}