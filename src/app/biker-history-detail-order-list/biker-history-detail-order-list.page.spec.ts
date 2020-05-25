import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BikerHistoryDetailOrderListPage } from './biker-history-detail-order-list.page';

describe('BikerHistoryDetailOrderListPage', () => {
  let component: BikerHistoryDetailOrderListPage;
  let fixture: ComponentFixture<BikerHistoryDetailOrderListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikerHistoryDetailOrderListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BikerHistoryDetailOrderListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
