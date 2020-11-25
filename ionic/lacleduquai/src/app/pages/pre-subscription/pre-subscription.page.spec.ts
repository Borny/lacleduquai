import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PreSubscriptionPage } from './pre-subscription.page';

describe('PreSubscriptionPage', () => {
  let component: PreSubscriptionPage;
  let fixture: ComponentFixture<PreSubscriptionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreSubscriptionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PreSubscriptionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
