import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ValidateTicketPagePage } from './validate-ticket-page.page';

describe('ValidateTicketPagePage', () => {
  let component: ValidateTicketPagePage;
  let fixture: ComponentFixture<ValidateTicketPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidateTicketPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ValidateTicketPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
