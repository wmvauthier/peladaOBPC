import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaCultosPage } from './lista-cultos.page';

describe('ListaCultosPage', () => {
  let component: ListaCultosPage;
  let fixture: ComponentFixture<ListaCultosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaCultosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaCultosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
