import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonInputComponent } from './ion-input.component';

describe('IonInputComponent', () => {
  let component: IonInputComponent;
  let fixture: ComponentFixture<IonInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonInputComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
