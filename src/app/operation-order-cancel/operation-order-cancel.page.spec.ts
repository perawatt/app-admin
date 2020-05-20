import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OperationOrderCancelPage } from './operation-order-cancel.page';

describe('OperationOrderCancelPage', () => {
  let component: OperationOrderCancelPage;
  let fixture: ComponentFixture<OperationOrderCancelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationOrderCancelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OperationOrderCancelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
