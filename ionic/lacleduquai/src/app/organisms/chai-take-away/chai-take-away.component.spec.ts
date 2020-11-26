import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChaiTakeAwayComponent } from './chai-take-away.component';

describe('ChaiTakeAwayComponent', () => {
  let component: ChaiTakeAwayComponent;
  let fixture: ComponentFixture<ChaiTakeAwayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChaiTakeAwayComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChaiTakeAwayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
