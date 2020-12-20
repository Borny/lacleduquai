import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BelaetcomeLogoComponent } from './belaetcome-logo.component';

describe('BelaetcomeLogoComponent', () => {
  let component: BelaetcomeLogoComponent;
  let fixture: ComponentFixture<BelaetcomeLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BelaetcomeLogoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BelaetcomeLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
