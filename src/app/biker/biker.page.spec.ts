import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BikerPage } from './biker.page';

describe('BikerPage', () => {
  let component: BikerPage;
  let fixture: ComponentFixture<BikerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BikerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
