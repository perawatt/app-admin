import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FinanceConfirmPage } from './finance-confirm.page';

describe('FinanceConfirmPage', () => {
  let component: FinanceConfirmPage;
  let fixture: ComponentFixture<FinanceConfirmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanceConfirmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FinanceConfirmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
