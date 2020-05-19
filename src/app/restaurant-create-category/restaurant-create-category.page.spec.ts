import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RestaurantCreateCategoryPage } from './restaurant-create-category.page';

describe('RestaurantCreateCategoryPage', () => {
  let component: RestaurantCreateCategoryPage;
  let fixture: ComponentFixture<RestaurantCreateCategoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantCreateCategoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RestaurantCreateCategoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
