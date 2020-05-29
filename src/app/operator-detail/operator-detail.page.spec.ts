import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OperatorDetailPage } from './operator-detail.page';

describe('OperatorDetailPage', () => {
  let component: OperatorDetailPage;
  let fixture: ComponentFixture<OperatorDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperatorDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OperatorDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
