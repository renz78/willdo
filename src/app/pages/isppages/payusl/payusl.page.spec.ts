import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PayuslPage } from './payusl.page';

describe('PayuslPage', () => {
  let component: PayuslPage;
  let fixture: ComponentFixture<PayuslPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayuslPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PayuslPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
