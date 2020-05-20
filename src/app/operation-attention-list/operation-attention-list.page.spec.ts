import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OperationAttentionListPage } from './operation-attention-list.page';

describe('OperationAttentionListPage', () => {
  let component: OperationAttentionListPage;
  let fixture: ComponentFixture<OperationAttentionListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationAttentionListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OperationAttentionListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
