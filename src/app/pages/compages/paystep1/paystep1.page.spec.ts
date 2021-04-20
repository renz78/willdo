import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Paystep1Page } from './paystep1.page';

describe('Paystep1Page', () => {
  let component: Paystep1Page;
  let fixture: ComponentFixture<Paystep1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Paystep1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Paystep1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
