import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FinanceCreatePage } from './finance-create.page';

describe('FinanceCreatePage', () => {
  let component: FinanceCreatePage;
  let fixture: ComponentFixture<FinanceCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanceCreatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FinanceCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
