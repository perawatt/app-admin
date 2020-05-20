import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BikerCreatePage } from './biker-create.page';

describe('BikerCreatePage', () => {
  let component: BikerCreatePage;
  let fixture: ComponentFixture<BikerCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikerCreatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BikerCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
