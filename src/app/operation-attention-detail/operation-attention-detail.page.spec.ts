import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OperationAttentionDetailPage } from './operation-attention-detail.page';

describe('OperationAttentionDetailPage', () => {
  let component: OperationAttentionDetailPage;
  let fixture: ComponentFixture<OperationAttentionDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationAttentionDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OperationAttentionDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
