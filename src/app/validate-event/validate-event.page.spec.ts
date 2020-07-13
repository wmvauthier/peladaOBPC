import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ValidateEventPage } from './validate-event.page';

describe('ValidateEventPage', () => {
  let component: ValidateEventPage;
  let fixture: ComponentFixture<ValidateEventPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidateEventPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ValidateEventPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
