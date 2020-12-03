import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoworkingPage } from './coworking.page';

describe('CoworkingPage', () => {
  let component: CoworkingPage;
  let fixture: ComponentFixture<CoworkingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoworkingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoworkingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
