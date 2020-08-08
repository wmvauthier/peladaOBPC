import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-lista-cultos',
  templateUrl: './lista-cultos.page.html',
  styleUrls: ['./lista-cultos.page.scss'],
})
export class ListaCultosPage implements OnInit {

  public listaCultos: any;

  public listaImgs = [
    "CULTO DE LOUVOR", "CULTO DE LOUVOR"
  ];

  constructor(private router: Router, private http: HttpService) { }

  ngOnInit() {
    this.getListaCultos();
  }

  getListaCultos() {
    this.http.get(`eventos/api`, []).subscribe(
      data => {
        data.eventos.forEach(element => {
          element.descEvento = this.listaImgs[element.typeEvento]
        });
        this.listaCultos = data.eventos;
      },
      error => { alert(error) }
    )
  }

  getListaPersonas(culto) {
    localStorage.setItem('adv-option', culto.id_evento);
    this.router.navigateByUrl('/lista-personas');
  }

}
