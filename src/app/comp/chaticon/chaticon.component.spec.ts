import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChaticonComponent } from './chaticon.component';

describe('ChaticonComponent', () => {
  let component: ChaticonComponent;
  let fixture: ComponentFixture<ChaticonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChaticonComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChaticonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
