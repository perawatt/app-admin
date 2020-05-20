import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OperationConfirmCancelOrderPage } from './operation-confirm-cancel-order.page';

describe('OperationConfirmCancelOrderPage', () => {
  let component: OperationConfirmCancelOrderPage;
  let fixture: ComponentFixture<OperationConfirmCancelOrderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationConfirmCancelOrderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OperationConfirmCancelOrderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
