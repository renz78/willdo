import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WalletzakPage } from './walletzak.page';

describe('WalletzakPage', () => {
  let component: WalletzakPage;
  let fixture: ComponentFixture<WalletzakPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletzakPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WalletzakPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
