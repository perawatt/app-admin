import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RestaurantProfileMenuEditPage } from './restaurant-profile-menu-edit.page';

describe('RestaurantProfileMenuEditPage', () => {
  let component: RestaurantProfileMenuEditPage;
  let fixture: ComponentFixture<RestaurantProfileMenuEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantProfileMenuEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RestaurantProfileMenuEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
