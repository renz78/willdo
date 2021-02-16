import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyratingPage } from './myrating.page';

describe('MyratingPage', () => {
  let component: MyratingPage;
  let fixture: ComponentFixture<MyratingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyratingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyratingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
