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

  private selectedQuantityTickets: number = 0;
  private selectedEventVagas: any = [];

  private selectedPersonaNome: any;
  private selectedPersonaFone: any;
  private selectedPersonaCPF: any;

  private selectedPersonaData: any = [];
  private countPersona: any;

  public btnSavePersonaData: any;

  constructor(private router: Router, private http: HttpService) { }

  ngOnInit() {
    this.selectedEventImg = localStorage.getItem('selectedEventImg');
    this.selectedEventNome = localStorage.getItem('selectedEventNome');
    this.selectedEventData = localStorage.getItem('selectedEventData');
    this.selectedEventVagas = parseInt(localStorage.getItem('selectedEventVagas'));
  }

  setFormNome(nome) { this.selectedPersonaNome = nome; }
  setFormFone(fone) { this.selectedPersonaFone = fone; }
  setFormCPF(cpf) { this.selectedPersonaCPF = cpf; }

  addTicketsQtd() {
    if (this.selectedQuantityTickets < this.selectedEventVagas && this.selectedQuantityTickets < 5)
      this.selectedQuantityTickets++;

    if (this.selectedQuantityTickets == 1) { this.btnSavePersonaData = 'Confirmar Inscrição' }
    else { this.btnSavePersonaData = 'Adicionar Pessoa' }

    this.countPersona = 1;
    this.selectedPersonaData = [];
  }

  minusTicketsQtd() {
    if (this.selectedQuantityTickets > 0)
      this.selectedQuantityTickets--;

    if (this.selectedQuantityTickets == 1) { this.btnSavePersonaData = 'Confirmar Inscrição' }
    else { this.btnSavePersonaData = 'Adicionar Pessoa' }

    this.countPersona = 1;
    this.selectedPersonaData = [];
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

      if (this.selectedQuantityTickets - this.selectedPersonaData.length == 1) { this.btnSavePersonaData = 'Confirmar Inscrição' }
      else { this.btnSavePersonaData = 'Adicionar Pessoa' }

      if (this.selectedPersonaData.length == this.selectedQuantityTickets) {

        this.countPersona = null;
        this.cleanFormTickets();
        localStorage.setItem('selectedPersonaData', JSON.stringify(this.selectedPersonaData));

        console.log(this.selectedPersonaData[0]);
        let ticket = this.genTicket();

        this.http.get('eventos/api/insertTicket', [
          localStorage.getItem('selectedEvent'),
          ticket,
          JSON.stringify(this.selectedPersonaData)
        ]).subscribe(
          data => { console.log(data) },
          error => { console.log(error) }
        );

        if (!localStorage.getItem('codTicket')) {
          localStorage.setItem('codTicket', ticket);
        } else if (!localStorage.getItem('codTicket2')) {
          localStorage.setItem('codTicket2', ticket);
        } else if (!localStorage.getItem('codTicket3')) {
          localStorage.setItem('codTicket3', ticket);
        }

        if (localStorage.getItem('codTicket') ||
          localStorage.getItem('codTicket2') ||
          localStorage.getItem('codTicket3')) {
          this.router.navigateByUrl('/events-confirm');
        }

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
    var dat = localStorage.getItem('selectedEventData').replace('/', '').replace('/', '');
    var dat1 = dat.substring(0, 4);
    var dat2 = dat.substring(6, 8);
    let ticket = `${dat1}${dat2}-${localStorage.getItem('selectedEvent')}-${this.makeid()}`;
    return ticket;
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