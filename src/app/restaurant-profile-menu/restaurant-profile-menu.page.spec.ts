import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RestaurantProfileMenuPage } from './restaurant-profile-menu.page';

describe('RestaurantProfileMenuPage', () => {
  let component: RestaurantProfileMenuPage;
  let fixture: ComponentFixture<RestaurantProfileMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantProfileMenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RestaurantProfileMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
