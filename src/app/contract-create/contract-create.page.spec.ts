import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContractCreatePage } from './contract-create.page';

describe('ContractCreatePage', () => {
  let component: ContractCreatePage;
  let fixture: ComponentFixture<ContractCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractCreatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContractCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
