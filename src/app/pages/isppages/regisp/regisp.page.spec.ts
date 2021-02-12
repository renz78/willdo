import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegispPage } from './regisp.page';

describe('RegispPage', () => {
  let component: RegispPage;
  let fixture: ComponentFixture<RegispPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegispPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegispPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
