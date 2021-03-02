import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NeworderPage } from './neworder.page';

describe('NeworderPage', () => {
  let component: NeworderPage;
  let fixture: ComponentFixture<NeworderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeworderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NeworderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
