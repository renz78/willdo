import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfileispPage } from './profileisp.page';

describe('ProfileispPage', () => {
  let component: ProfileispPage;
  let fixture: ComponentFixture<ProfileispPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileispPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileispPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
