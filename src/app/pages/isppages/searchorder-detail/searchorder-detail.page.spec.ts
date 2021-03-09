import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchorderDetailPage } from './searchorder-detail.page';

describe('SearchorderDetailPage', () => {
  let component: SearchorderDetailPage;
  let fixture: ComponentFixture<SearchorderDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchorderDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchorderDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
