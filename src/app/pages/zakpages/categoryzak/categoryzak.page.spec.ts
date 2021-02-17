import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CategoryzakPage } from './categoryzak.page';

describe('CategoryzakPage', () => {
  let component: CategoryzakPage;
  let fixture: ComponentFixture<CategoryzakPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryzakPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CategoryzakPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
