import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-validate-ticket-page',
  templateUrl: './validate-ticket-page.page.html',
  styleUrls: ['./validate-ticket-page.page.scss'],
})
export class ValidateTicketPagePage implements OnInit {

  private qrData: any;
  private createCode: any;
  private ticketToValidate: any;
  private selectedPersonaData: any;

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.ticketToValidate = localStorage.getItem('ticketToValidate');
    this.http.get('eventos/api/validateTicket', [this.ticketToValidate]).subscribe(
      data => {
        this.http.get('eventos/api', []).subscribe(
          data2 => {
            data2.eventos.forEach(element => {
              this.http.get('eventos/api/listaTicket', [element.id_evento]).subscribe(
                data3 => {
                  data3.eventosTickets.forEach(element => {
                    if (element.ticket == this.ticketToValidate) {
                      this.selectedPersonaData = JSON.parse(element.personaData);
                    }
                  });
                },
                error3 => { alert(error3.message) });
            });
          },
          error2 => { alert(error2.message) });
      },
      error => { alert(error.message) }
    );
    this.qrData = this.ticketToValidate;
    this.create();
  }

  create() {
    this.createCode = this.qrData;
  }

}
