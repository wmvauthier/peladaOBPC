import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CultPage } from './cult.page';

describe('CultPage', () => {
  let component: CultPage;
  let fixture: ComponentFixture<CultPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CultPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
