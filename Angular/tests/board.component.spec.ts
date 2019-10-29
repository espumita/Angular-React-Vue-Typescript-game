import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from "@angular/platform-browser";
import { storeBuilder } from './mockStoreBuilder'
import { BoardComponent } from '../src/components/board/board.component';
import { CellComponent } from '../src/components/cell/cell.component';
import { BeginnerDifficulty } from '../src/model'

describe('Board should', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BoardComponent,
        CellComponent
      ],
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

})

function mountBoardComponentWith(store: any) {
  //return mount(Board, { store, localVue })
  const fixture = TestBed.createComponent(BoardComponent);
  const component = fixture.componentInstance;
  fixture.detectChanges();
  return fixture
}