import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../services/http.service'

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {

  private listaCultos: any = [];
  private allCultos: any = [];
  private listaImgs: any;

  constructor(private router: Router, private http: HttpService) { }

  ngOnInit() {

    this.listaImgs = [
      {
        id: "CULTO DE LOUVOR",
        url: "../../assets/imgs/EV1.jpg"
      },
      {
        id: "CULTO DE LOUVOR",
        url: "../../assets/imgs/EV1.jpg"
      },
      {
        id: "CÍRCULO DE ORAÇÃO",
        url: "../../assets/imgs/EV2.jpg"
      }
    ];

    this.http.get(`eventos/api`, []).subscribe(
      data => {
        data.eventos.forEach(element => {

          this.allCultos.push(
            {
              id: element.id_evento,
              nome: this.listaImgs[element.id_evento].id,
              church: 'OBPC Jaboatão',
              type: this.listaImgs[element.id_evento].url,
              data: element.dataEvento,
              vagas: element.vagasEvento
            }
          )

          this.allCultos.forEach(element => {

            let day = parseInt(element.data.substr(0, 2));
            let month = parseInt(element.data.substr(3, 2)) - 1;
            let year = parseInt(element.data.substr(6, 8));

            const letterMonth = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ']

            let today = new Date();
            let data = new Date(year, month, day);

            let diff = this.date_diff_indays(today, data);

            if (diff > -1) {
              element.letterMonth = letterMonth[month];
              element.letterDate = day;
              this.listaCultos.push(element);
            }

          });

        });
      },
      error => console.log(error)
    );

  };

  subscribeEvent(event) {

    localStorage.setItem('selectedEvent', event.id);
    localStorage.setItem('selectedEventNome', event.nome);
    localStorage.setItem('selectedEventData', event.data);
    localStorage.setItem('selectedEventImg', event.type);
    localStorage.setItem('selectedEventVagas', event.vagas);

    this.validateCodTicket();

    if (event.vagas > 0) {

      let codTicket = localStorage.getItem('codTicket');
      let codTicket2 = localStorage.getItem('codTicket2');
      let codTicket3 = localStorage.getItem('codTicket3');

      if (
        codTicket && event.id == codTicket.split('-')[1] ||
        codTicket2 && event.id == codTicket2.split('-')[1] ||
        codTicket3 && event.id == codTicket3.split('-')[1]
      ) {
        this.router.navigateByUrl('/events-confirm');
      } else {
        this.router.navigateByUrl('/events-details');
      }

    }

  }

  validateCodTicket() {

    let codTicket = localStorage.getItem('codTicket');
    let codTicket2 = localStorage.getItem('codTicket2');
    let codTicket3 = localStorage.getItem('codTicket3');

    let codTickets = [
      { nome: 'codTicket', val: codTicket },
      { nome: 'codTicket2', val: codTicket2 },
      { nome: 'codTicket3', val: codTicket3 }
    ];

    codTickets.forEach(function (element) {
      if (element.val) {

        let ticket = element.val;

        let day = parseInt(`${ticket.substr(0, 2)}`);
        let month = parseInt(`${ticket.substr(2, 2)}`) - 1;
        let year = parseInt(`20${ticket.substr(4, 6)}`);

        let dt1 = new Date();
        let dt2 = new Date(year, month, day);
        let diff = Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) / (1000 * 60 * 60 * 24));


        if (diff < 0) { localStorage.removeItem(element.nome) }

      }
    });

  }

  date_diff_indays(dt1, dt2) {
    return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) / (1000 * 60 * 60 * 24));
  }

  go(number) {
    switch (number) {
      case 0:
        this.router.navigateByUrl('/home');
        break;
      case 1:
        this.router.navigateByUrl('/igreja');
        break;
      default:
        break;
    }
  }

}
