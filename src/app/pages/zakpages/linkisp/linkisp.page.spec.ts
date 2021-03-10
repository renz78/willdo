import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LinkispPage } from './linkisp.page';

describe('LinkispPage', () => {
  let component: LinkispPage;
  let fixture: ComponentFixture<LinkispPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkispPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LinkispPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
