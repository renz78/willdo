import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfilezakPage } from './profilezak.page';

describe('ProfilezakPage', () => {
  let component: ProfilezakPage;
  let fixture: ComponentFixture<ProfilezakPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilezakPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfilezakPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
