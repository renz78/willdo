import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SuccessRegPage } from './success-reg.page';

describe('SuccessRegPage', () => {
  let component: SuccessRegPage;
  let fixture: ComponentFixture<SuccessRegPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessRegPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SuccessRegPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
