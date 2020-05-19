import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BikerHistoryPage } from './biker-history.page';

describe('BikerHistoryPage', () => {
  let component: BikerHistoryPage;
  let fixture: ComponentFixture<BikerHistoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikerHistoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BikerHistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
