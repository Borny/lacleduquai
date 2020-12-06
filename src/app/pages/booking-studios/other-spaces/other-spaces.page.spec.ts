import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OtherSpacesPage } from './other-spaces.page';

describe('OtherSpacesPage', () => {
  let component: OtherSpacesPage;
  let fixture: ComponentFixture<OtherSpacesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherSpacesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OtherSpacesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
