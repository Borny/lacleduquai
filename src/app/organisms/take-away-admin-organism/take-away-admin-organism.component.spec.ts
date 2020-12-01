import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TakeAwayAdminOrganismComponent } from './take-away-admin-organism.component';

describe('TakeAwayAdminOrganismComponent', () => {
  let component: TakeAwayAdminOrganismComponent;
  let fixture: ComponentFixture<TakeAwayAdminOrganismComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakeAwayAdminOrganismComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TakeAwayAdminOrganismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
