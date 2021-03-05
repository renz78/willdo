import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchorderPage } from './searchorder.page';

describe('SearchorderPage', () => {
  let component: SearchorderPage;
  let fixture: ComponentFixture<SearchorderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchorderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchorderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
