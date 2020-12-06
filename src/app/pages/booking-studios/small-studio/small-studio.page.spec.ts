import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SmallStudioPage } from './small-studio.page';

describe('SmallStudioPage', () => {
  let component: SmallStudioPage;
  let fixture: ComponentFixture<SmallStudioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallStudioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SmallStudioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
