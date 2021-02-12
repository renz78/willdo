import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FirstispPage } from './firstisp.page';

describe('FirstispPage', () => {
  let component: FirstispPage;
  let fixture: ComponentFixture<FirstispPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstispPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FirstispPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
