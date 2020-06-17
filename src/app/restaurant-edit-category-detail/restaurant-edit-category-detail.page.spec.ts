import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RestaurantEditCategoryDetailPage } from './restaurant-edit-category-detail.page';

describe('RestaurantEditCategoryDetailPage', () => {
  let component: RestaurantEditCategoryDetailPage;
  let fixture: ComponentFixture<RestaurantEditCategoryDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantEditCategoryDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RestaurantEditCategoryDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
