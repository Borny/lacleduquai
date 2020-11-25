import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CafePage } from './cafe.page';

describe('CafePage', () => {
  let component: CafePage;
  let fixture: ComponentFixture<CafePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CafePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CafePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
