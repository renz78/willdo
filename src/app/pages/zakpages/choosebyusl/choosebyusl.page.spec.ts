import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChoosebyuslPage } from './choosebyusl.page';

describe('ChoosebyuslPage', () => {
  let component: ChoosebyuslPage;
  let fixture: ComponentFixture<ChoosebyuslPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoosebyuslPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChoosebyuslPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
