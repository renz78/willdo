import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Paystep0Page } from './paystep0.page';

describe('Paystep0Page', () => {
  let component: Paystep0Page;
  let fixture: ComponentFixture<Paystep0Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Paystep0Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Paystep0Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
