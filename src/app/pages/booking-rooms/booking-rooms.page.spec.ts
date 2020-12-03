import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BookingRoomsPage } from './booking-rooms.page';

describe('BookingRoomsPage', () => {
  let component: BookingRoomsPage;
  let fixture: ComponentFixture<BookingRoomsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingRoomsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BookingRoomsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
