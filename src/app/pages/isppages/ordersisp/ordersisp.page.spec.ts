import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrdersispPage } from './ordersisp.page';

describe('OrdersispPage', () => {
  let component: OrdersispPage;
  let fixture: ComponentFixture<OrdersispPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersispPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrdersispPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
