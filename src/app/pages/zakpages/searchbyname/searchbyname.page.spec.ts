import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchbynamePage } from './searchbyname.page';

describe('SearchbynamePage', () => {
  let component: SearchbynamePage;
  let fixture: ComponentFixture<SearchbynamePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchbynamePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchbynamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
