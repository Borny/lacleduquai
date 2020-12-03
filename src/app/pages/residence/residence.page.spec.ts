import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResidencePage } from './residence.page';

describe('ResidencePage', () => {
  let component: ResidencePage;
  let fixture: ComponentFixture<ResidencePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResidencePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResidencePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
