import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RestaurantProfileMenuCreatePage } from './restaurant-profile-menu-create.page';

describe('RestaurantProfileMenuCreatePage', () => {
  let component: RestaurantProfileMenuCreatePage;
  let fixture: ComponentFixture<RestaurantProfileMenuCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantProfileMenuCreatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RestaurantProfileMenuCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
