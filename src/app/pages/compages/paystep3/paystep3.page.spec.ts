import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Paystep3Page } from './paystep3.page';

describe('Paystep3Page', () => {
  let component: Paystep3Page;
  let fixture: ComponentFixture<Paystep3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Paystep3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Paystep3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
