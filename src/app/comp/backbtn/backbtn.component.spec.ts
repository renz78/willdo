import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BackbtnComponent } from './backbtn.component';

describe('BackbtnComponent', () => {
  let component: BackbtnComponent;
  let fixture: ComponentFixture<BackbtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackbtnComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BackbtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
