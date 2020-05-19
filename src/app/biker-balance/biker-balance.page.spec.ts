import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BikerBalancePage } from './biker-balance.page';

describe('BikerBalancePage', () => {
  let component: BikerBalancePage;
  let fixture: ComponentFixture<BikerBalancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikerBalancePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BikerBalancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
