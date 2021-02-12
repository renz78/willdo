import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegzakPage } from './regzak.page';

describe('RegzakPage', () => {
  let component: RegzakPage;
  let fixture: ComponentFixture<RegzakPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegzakPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegzakPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
