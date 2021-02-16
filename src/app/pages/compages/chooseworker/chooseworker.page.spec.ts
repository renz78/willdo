import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChooseworkerPage } from './chooseworker.page';

describe('ChooseworkerPage', () => {
  let component: ChooseworkerPage;
  let fixture: ComponentFixture<ChooseworkerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseworkerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChooseworkerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
