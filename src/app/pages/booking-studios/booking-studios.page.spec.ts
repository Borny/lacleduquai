import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BookingStudiosPage } from './booking-studios.page';

describe('BookingStudiosPage', () => {
  let component: BookingStudiosPage;
  let fixture: ComponentFixture<BookingStudiosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingStudiosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BookingStudiosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
