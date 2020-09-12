import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events-confirm',
  templateUrl: './events-confirm.page.html',
  styleUrls: ['./events-confirm.page.scss'],
})
export class EventsConfirmPage implements OnInit {

  private qrData: any;
  private createCode: any;
  private selectedEvent: any = localStorage.getItem('selectedEvent');
  public selectedEventNome: any;
  public selectedEventData: any;
  public selectedPersonaData: any;

  constructor(private http: HttpService, private router: Router) { }

  ngOnInit() {

    let selectedId = localStorage.getItem('selectedEvent');

    let codTicket = localStorage.getItem('codTicket');
    let codTicket2 = localStorage.getItem('codTicket2');
    let codTicket3 = localStorage.getItem('codTicket3');

    this.selectedEventNome = localStorage.getItem('selectedEventNome');
    this.selectedEventData = this.formatTextData();

    while (!this.qrData) {
      if (codTicket && selectedId == codTicket.split('-')[1]) {
        this.qrData = localStorage.getItem('codTicket');
      } else if (codTicket2 && selectedId == codTicket2.split('-')[1]) {
        this.qrData = localStorage.getItem('codTicket2');
      } else if (codTicket3 && selectedId == codTicket3.split('-')[1]) {
        this.qrData = localStorage.getItem('codTicket3');
      }
    }

    this.http.get('eventos/api/listaTicket', [this.selectedEvent]).subscribe(
      data => {
        data.eventosTickets.forEach(element => {
          if (element.ticket == this.qrData) {
            this.selectedPersonaData = JSON.parse(element.personaData);
          }
        });
      },
      error => console.log(error)
    )

    this.create();

  }

  formatTextData() {
    let dat = localStorage.getItem('selectedEventData');

    let day = parseInt(dat.substr(0, 2));
    let month = parseInt(dat.substr(3, 2)) - 1;
    let year = parseInt(dat.substr(6, 8));

    const letterMonth = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ']

    return day + "  " + letterMonth[month] + "  " + year;
  }

  backConfirm() {
    if (!navigator.onLine) { this.router.navigateByUrl('/home') }
    else { this.router.navigateByUrl('/events') }
  }

  create() { this.createCode = this.qrData }

}
