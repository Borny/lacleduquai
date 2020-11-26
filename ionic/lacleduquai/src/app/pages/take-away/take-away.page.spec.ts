import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TakeAwayPage } from './take-away.page';

describe('TakeAwayPage', () => {
  let component: TakeAwayPage;
  let fixture: ComponentFixture<TakeAwayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakeAwayPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TakeAwayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
