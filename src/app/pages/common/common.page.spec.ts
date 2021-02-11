import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CommonPage } from './common.page';

describe('CommonPage', () => {
  let component: CommonPage;
  let fixture: ComponentFixture<CommonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CommonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
