import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RestaurantProfileHistoryPage } from './restaurant-profile-history.page';

describe('RestaurantProfileHistoryPage', () => {
  let component: RestaurantProfileHistoryPage;
  let fixture: ComponentFixture<RestaurantProfileHistoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantProfileHistoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RestaurantProfileHistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
