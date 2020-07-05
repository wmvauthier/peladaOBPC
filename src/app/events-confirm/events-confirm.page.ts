import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-confirm',
  templateUrl: './events-confirm.page.html',
  styleUrls: ['./events-confirm.page.scss'],
})
export class EventsConfirmPage implements OnInit {

  private qrData: any;
  private createCode: any;

  constructor() { }

  ngOnInit() {

    let selectedId = localStorage.getItem('selectedEvent');

    let codTicket = localStorage.getItem('codTicket');
    let codTicket2 = localStorage.getItem('codTicket2');
    let codTicket3 = localStorage.getItem('codTicket3');

    while (!this.qrData) {
      if (codTicket && selectedId == codTicket.split('#')[1]) {
        this.qrData = localStorage.getItem('codTicket');
      } else if (codTicket2 && selectedId == codTicket2.split('#')[1]) {
        this.qrData = localStorage.getItem('codTicket2');
      } else if (codTicket3 && selectedId == codTicket3.split('#')[1]) {
        this.qrData = localStorage.getItem('codTicket3');
      }
    }

    this.create();

  }

  create() {
    this.createCode = this.qrData;
  }

}
