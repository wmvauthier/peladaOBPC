import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../services/http.service';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-lista-personas',
  templateUrl: './lista-personas.page.html',
  styleUrls: ['./lista-personas.page.scss'],
})
export class ListaPersonasPage implements OnInit {

  public listaPersonas: any;
  public showCPF: boolean = false;
  public showStatus: boolean = true;
  public showOptions: boolean = true;

  public countGreen: any = 0;
  public countRed: any = 0;
  public countYellow: any = 0;
  public countTotal: any = 0;

  constructor(private router: Router, private http: HttpService) { }

  ngOnInit() {
    this.getListaPersonas();
  }

  addIndividualPersona() {

    var nome = prompt('Insira o nome da Pessoa:');
    var telefone = prompt('Insira o telefone da Pessoa');
    var cpf = prompt('Insira o CPF da Pessoa');
    var id_evento = localStorage.getItem('adv-option');

    if (nome && telefone && cpf) {
      this.http.get(`eventos/api/insertIndividualPersona`, [id_evento, nome, cpf]).subscribe(
        data => { alert(data.mensagem) },
        error => { console.log(error) }
      );
    } else {
      alert('Preencha os dados da Pessoa!');
    }

  }

  getListaPersonas() {

    let idEvento = localStorage.getItem('adv-option');

    this.countGreen = 0;
    this.countRed = 0;
    this.countYellow = 0;
    this.countTotal = 0;

    this.http.get(`eventos/api/listaPersona`, [idEvento]).subscribe(
      data => {
        let i = 1;
        data.listaPersona.forEach(element => {
          if (element.status == 0) { this.countGreen++ }
          else if (element.status == 1) { this.countYellow++ }
          else if (element.status == 2) { this.countRed++ }
          element.count = i;
          i++;
          this.countTotal++;
        });
        this.listaPersonas = data.listaPersona;
      },
      error => { console.log(error) }
    );

  }

  validatePersona(p) {
    if (p.status == 1) {
      if (confirm(`Deseja validar a entrada de ${p.nome}?`)) {
        this.http.get(`eventos/api/validatePersona`, [p.id_ListaPersona]).subscribe(
          data => {
            localStorage.setItem('adv-option', p.id_evento);
            this.getListaPersonas();
          },
          error => { console.log(error) }
        );
      }
    }
  }

  cancelPersona(p) {
    if (p.status !== 0) {
      if (confirm(`Deseja cancelar a entrada de ${p.nome}?`)) {
        this.http.get(`eventos/api/cancelPersona`, [p.id_ListaPersona]).subscribe(
          data => {
            localStorage.setItem('adv-option', p.id_evento);
            this.getListaPersonas();
          },
          error => { console.log(error) }
        );
      }
    }
  }

}
