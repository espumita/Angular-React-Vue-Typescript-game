import { TestBed, async } from '@angular/core/testing'
import { RootComponent } from '../src/components/root/root.component'

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RootComponent
      ],
    }).compileComponents()
  }))

  test('should create the app', () => {
    const fixture = TestBed.createComponent(RootComponent)
    const app = fixture.debugElement.componentInstance
    expect(app).toBeTruthy()
  })

  test(`should have as title 'hello-world'`, () => {
    const fixture = TestBed.createComponent(RootComponent)
    const app = fixture.debugElement.componentInstance
    expect(app.title).toEqual('hello-world')
  })

})
