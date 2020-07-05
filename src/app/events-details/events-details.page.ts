import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-events-details',
  templateUrl: './events-details.page.html',
  styleUrls: ['./events-details.page.scss'],
})
export class EventsDetailsPage implements OnInit {

  private selectedEventImg: any;
  private selectedEventNome: any;
  private selectedEventData: any;

  private selectedQuantityTickets: any;
  private selectedEventVagas: any = [];

  private selectedPersonaNome: any;
  private selectedPersonaFone: any;
  private selectedPersonaCPF: any;

  private selectedPersonaData: any = [];
  private countPersona: any;

  constructor(private router: Router, private http: HttpService) { }

  ngOnInit() {
    this.selectedEventImg = localStorage.getItem('selectedEventImg');
    this.selectedEventNome = localStorage.getItem('selectedEventNome');
    this.selectedEventData = localStorage.getItem('selectedEventData');

    var qtd = parseInt(localStorage.getItem('selectedEventVagas'));
    this.selectedEventVagas.push({ number: 1, desc: `1 ticket` });

    for (let i = 2; i <= qtd; i++) {
      this.selectedEventVagas.push({ number: i, desc: `${i} tickets` });
    }

  }

  setFormNome(nome) { this.selectedPersonaNome = nome; }
  setFormFone(fone) { this.selectedPersonaFone = fone; }
  setFormCPF(cpf) { this.selectedPersonaCPF = cpf; }

  setSelectedQuantityTickets(qtd) {
    this.countPersona = 1;
    this.selectedPersonaData = [];
    this.selectedQuantityTickets = qtd;
  }

  cleanFormTickets() {
    this.selectedPersonaNome = null;
    this.selectedPersonaFone = null;
    this.selectedPersonaCPF = null;
  }

  addPersonaData() {

    if (this.selectedPersonaNome && this.selectedPersonaFone && this.selectedPersonaCPF) {
      this.selectedPersonaData.push({
        nome: this.selectedPersonaNome,
        fone: this.selectedPersonaFone,
        cpf: this.selectedPersonaCPF
      });

      this.countPersona++;
      this.cleanFormTickets();

      if (this.selectedPersonaData.length == this.selectedQuantityTickets) {

        this.countPersona = null;
        this.cleanFormTickets();
        localStorage.setItem('selectedPersonaData', JSON.stringify(this.selectedPersonaData));

        console.log(this.selectedPersonaData[0]);

        this.http.get('eventos/api/insertTicket', [
          localStorage.getItem('selectedEvent'),
          this.genTicket(),
          JSON.stringify(this.selectedPersonaData)
        ]).subscribe(
          data => { console.log(data) },
          error => { console.log(error) }
        );

        if (!localStorage.getItem('codTicket')) {
          localStorage.setItem('codTicket', `050720#1#${this.makeid()}`);
        } else if (!localStorage.getItem('codTicket2')) {
          localStorage.setItem('codTicket2', `050720#1#${this.makeid()}`);
        } else if (!localStorage.getItem('codTicket3')) {
          localStorage.setItem('codTicket3', `050720#1#${this.makeid()}`);
        }

        this.router.navigateByUrl('/events-confirm');

      }
    } else { alert('Preencha todos os campos!') }

  }

  makeid() {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < 4; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  genTicket() {

    let year = new Date().getFullYear().toString().substr(0, 2);
    let month = (new Date().getMonth() + 1).toString();
    let day = (new Date().getDate()).toString();

    if (month.length < 2) { month = `0${month}` }
    if (day.length < 2) { day = `0${day}` }

    return `${day}${month}${year}-${localStorage.getItem('selectedEvent')}-${this.makeid()}`;

  }

  go(number) {
    switch (number) {
      case 0:
        this.router.navigateByUrl('/home');
        break;
      case 1:
        this.router.navigateByUrl('/igreja');
        break;
      case 8:
        this.router.navigateByUrl('/events');
        break;
      default:
        break;
    }
  }

}