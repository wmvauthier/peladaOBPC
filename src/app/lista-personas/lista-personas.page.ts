import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-lista-personas',
  templateUrl: './lista-personas.page.html',
  styleUrls: ['./lista-personas.page.scss'],
})
export class ListaPersonasPage implements OnInit {

  public listaPersonas: any;

  constructor(private router: Router, private http: HttpService) { }

  ngOnInit() {
    this.getListaPersonas();
  }

  getListaPersonas() {

    let idEvento = localStorage.getItem('adv-option');
    localStorage.setItem('adv-option', null);

    this.http.get(`eventos/api/listaPersona`, [idEvento]).subscribe(
      data => {
        let i = 1;
        data.listaPersona.forEach(element => {
          element.count = i;
          i++;
        });
        this.listaPersonas = data.listaPersona;
      },
      error => { console.log(error) }
    );

  }

  validatePersona(p) {
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
