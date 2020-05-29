import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OperatorCreatePage } from './operator-create.page';

describe('OperatorCreatePage', () => {
  let component: OperatorCreatePage;
  let fixture: ComponentFixture<OperatorCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperatorCreatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OperatorCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
