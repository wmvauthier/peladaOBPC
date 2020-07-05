import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EventsConfirmPage } from './events-confirm.page';

describe('EventsConfirmPage', () => {
  let component: EventsConfirmPage;
  let fixture: ComponentFixture<EventsConfirmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsConfirmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EventsConfirmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
