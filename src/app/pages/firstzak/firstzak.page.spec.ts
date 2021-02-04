import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FirstzakPage } from './firstzak.page';

describe('FirstzakPage', () => {
  let component: FirstzakPage;
  let fixture: ComponentFixture<FirstzakPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstzakPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FirstzakPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
