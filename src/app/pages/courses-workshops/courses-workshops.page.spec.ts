import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoursesWorkshopsPage } from './courses-workshops.page';

describe('CoursesWorkshopsPage', () => {
  let component: CoursesWorkshopsPage;
  let fixture: ComponentFixture<CoursesWorkshopsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesWorkshopsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoursesWorkshopsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
