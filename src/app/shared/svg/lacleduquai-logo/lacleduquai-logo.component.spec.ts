import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LacleduquaiLogoComponent } from './lacleduquai-logo.component';

describe('LacleduquaiLogoComponent', () => {
  let component: LacleduquaiLogoComponent;
  let fixture: ComponentFixture<LacleduquaiLogoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LacleduquaiLogoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LacleduquaiLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
