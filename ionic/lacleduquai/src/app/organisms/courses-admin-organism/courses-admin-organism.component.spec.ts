import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoursesAdminOrganismComponent } from './courses-admin-organism.component';

describe('CoursesAdminOrganismComponent', () => {
  let component: CoursesAdminOrganismComponent;
  let fixture: ComponentFixture<CoursesAdminOrganismComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesAdminOrganismComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoursesAdminOrganismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
