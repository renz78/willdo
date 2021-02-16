import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WalletispPage } from './walletisp.page';

describe('WalletispPage', () => {
  let component: WalletispPage;
  let fixture: ComponentFixture<WalletispPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletispPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WalletispPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
