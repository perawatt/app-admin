import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RestaurantProfileHistoryDetailPage } from './restaurant-profile-history-detail.page';

describe('RestaurantProfileHistoryDetailPage', () => {
  let component: RestaurantProfileHistoryDetailPage;
  let fixture: ComponentFixture<RestaurantProfileHistoryDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantProfileHistoryDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RestaurantProfileHistoryDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
