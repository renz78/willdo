import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Paystep2Page } from './paystep2.page';

describe('Paystep2Page', () => {
  let component: Paystep2Page;
  let fixture: ComponentFixture<Paystep2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Paystep2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Paystep2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
