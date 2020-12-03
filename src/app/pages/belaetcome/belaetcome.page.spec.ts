import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BelaetcomePage } from './belaetcome.page';

describe('BelaetcomePage', () => {
  let component: BelaetcomePage;
  let fixture: ComponentFixture<BelaetcomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BelaetcomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BelaetcomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
