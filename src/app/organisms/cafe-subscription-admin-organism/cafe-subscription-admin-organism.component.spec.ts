import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CafeSubscriptionAdminOrganismComponent } from './cafe-subscription-admin-organism.component';

describe('CafeSubscriptionAdminOrganismComponent', () => {
  let component: CafeSubscriptionAdminOrganismComponent;
  let fixture: ComponentFixture<CafeSubscriptionAdminOrganismComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CafeSubscriptionAdminOrganismComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CafeSubscriptionAdminOrganismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
