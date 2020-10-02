import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  // public listaJogadores = [
  //   { nome: 'Emerson', vel: 10, sho: 10, pas: 10, dri: 10, def: 10, phy: 10, med: 0, status: '0' },
  //   { nome: 'Pedrinho', vel: 10, sho: 10, pas: 10, dri: 10, def: 9, phy: 10, med: 0, status: '0' },
  //   { nome: 'Janderson', vel: 10, sho: 10, pas: 10, dri: 10, def: 10, phy: 10, med: 0, status: '0' },
  //   { nome: 'Antony', vel: 7, sho: 7, pas: 10, dri: 9, def: 6, phy: 7, med: 0, status: '0' },
  //   { nome: 'Zoldan', vel: 7, sho: 9, pas: 9, dri: 8, def: 10, phy: 8, med: 0, status: '0' },
  //   { nome: 'Diogo', vel: 9, sho: 8, pas: 10, dri: 10, def: 7, phy: 9, med: 0, status: '0' },
  //   { nome: 'Rhaldney', vel: 5, sho: 6, pas: 5, dri: 5, def: 5, phy: 5, med: 0, status: '0' },
  //   { nome: 'Rômulo', vel: 7, sho: 10, pas: 10, dri: 10, def: 10, phy: 9, med: 0, status: '0' },
  //   { nome: 'Luan', vel: 9, sho: 10, pas: 10, dri: 10, def: 6, phy: 10, med: 0, status: '0' },
  //   { nome: 'Lucas', vel: 7, sho: 7, pas: 6, dri: 5, def: 9, phy: 7, med: 0, status: '0' },
  //   { nome: 'Danilo', vel: 7, sho: 7, pas: 7, dri: 6, def: 7, phy: 7, med: 0, status: '0' },
  //   { nome: 'Jorge', vel: 7, sho: 8, pas: 10, dri: 7, def: 7, phy: 9, med: 0, status: '0' },
  //   { nome: 'Guizinho', vel: 4, sho: 2, pas: 4, dri: 4, def: 6, phy: 6, med: 0, status: '0' },
  //   { nome: 'Bruno', vel: 4, sho: 5, pas: 4, dri: 5, def: 5, phy: 5, med: 0, status: '0' },
  //   { nome: 'Pr. José Marcos', vel: 4, sho: 5, pas: 5, dri: 5, def: 7, phy: 6, med: 0, status: '0' },
  //   { nome: 'C. Henrique', vel: 6, sho: 6, pas: 6, dri: 6, def: 5, phy: 7, med: 0, status: '0' },
  //   { nome: 'Luciano', vel: 6, sho: 6, pas: 6, dri: 6, def: 5, phy: 6, med: 0, status: '0' },
  //   { nome: 'Marcílio', vel: 6, sho: 8, pas: 9, dri: 6, def: 9, phy: 6, med: 0, status: '0' },
  //   { nome: 'P. Victor', vel: 5, sho: 6, pas: 7, dri: 5, def: 9, phy: 5, med: 0, status: '0' },
  //   { nome: 'Dino', vel: 4, sho: 6, pas: 6, dri: 4, def: 8, phy: 4, med: 0, status: '0' },
  //   { nome: 'Xavier', vel: 6, sho: 8, pas: 8, dri: 8, def: 6, phy: 6, med: 0, status: '0' },
  // ];

  public listaJogadores = [
    { nome: 'Emerson', vel: 10, sho: 9, pas: 10, dri: 10, def: 10, phy: 10, med: 0, status: '0' },
    { nome: 'Pedrinho', vel: 10, sho: 10, pas: 9, dri: 9, def: 8, phy: 10, med: 0, status: '0' },
    { nome: 'Janderson', vel: 10, sho: 8, pas: 9, dri: 8, def: 10, phy: 10, med: 0, status: '0' },
    { nome: 'Antony', vel: 7, sho: 8, pas: 10, dri: 8, def: 6, phy: 8, med: 0, status: '0' },
    { nome: 'Zoldan', vel: 7, sho: 8, pas: 9, dri: 8, def: 10, phy: 8, med: 0, status: '0' },
    { nome: 'Diogo', vel: 8, sho: 9, pas: 9, dri: 10, def: 7, phy: 9, med: 0, status: '0' },
    { nome: 'Rhaldney', vel: 5, sho: 6, pas: 5, dri: 5, def: 5, phy: 5, med: 0, status: '0' },
    { nome: 'Rômulo', vel: 7, sho: 10, pas: 10, dri: 10, def: 9, phy: 9, med: 0, status: '0' },
    { nome: 'Luan', vel: 9, sho: 9, pas: 10, dri: 10, def: 8, phy: 10, med: 0, status: '0' },
    { nome: 'Lucas', vel: 7, sho: 7, pas: 6, dri: 5, def: 8, phy: 7, med: 0, status: '0' },
    { nome: 'Danilo', vel: 7, sho: 8, pas: 8, dri: 8, def: 7, phy: 7, med: 0, status: '0' },
    { nome: 'Jorge', vel: 7, sho: 8, pas: 9, dri: 7, def: 7, phy: 9, med: 0, status: '0' },
    { nome: 'Guizinho', vel: 4, sho: 2, pas: 4, dri: 4, def: 6, phy: 6, med: 0, status: '0' },
    { nome: 'Bruno', vel: 4, sho: 5, pas: 4, dri: 5, def: 5, phy: 5, med: 0, status: '0' },
    { nome: 'Pr. José Marcos', vel: 4, sho: 5, pas: 5, dri: 5, def: 5, phy: 5, med: 0, status: '0' },
    { nome: 'C. Henrique', vel: 6, sho: 7, pas: 8, dri: 7, def: 7, phy: 7, med: 0, status: '0' },
    { nome: 'Luciano', vel: 6, sho: 6, pas: 6, dri: 6, def: 5, phy: 6, med: 0, status: '0' },
    { nome: 'Marcílio', vel: 6, sho: 8, pas: 9, dri: 6, def: 9, phy: 6, med: 0, status: '0' },
    { nome: 'P. Victor', vel: 5, sho: 6, pas: 7, dri: 5, def: 9, phy: 5, med: 0, status: '0' },
    { nome: 'Dino', vel: 4, sho: 6, pas: 6, dri: 4, def: 8, phy: 4, med: 0, status: '0' },
    { nome: 'Xavier', vel: 6, sho: 8, pas: 8, dri: 8, def: 6, phy: 6, med: 0, status: '0' },
  ];

  public jogadores = [];

  public showLista: boolean = true;

  public outTime: any = new Array();
  public timesArray: any = new Array();

  constructor() {
    this.listaJogadores.forEach(jogador => {
      jogador.med = parseFloat((
        ((jogador.vel + jogador.sho + jogador.pas + jogador.dri + jogador.def + jogador.phy) / 6) / 2)
        .toFixed());
    })
    this.listaJogadores.sort(this.setCapitains);
  }

  switchStatusCondition(jogador) {
    jogador.status = !jogador.status;
  }

  generateTeams() {

    this.jogadores = [];
    this.timesArray = [];

    this.listaJogadores.forEach(jogador => {
      if (jogador.status == '1') {
        this.jogadores.push(jogador);
      }
    });

    this.calculateMedia();
    let qtd = ((this.jogadores.length) / 4) | 0;
    this.generateEquipes(qtd);
    this.jogadores.sort(this.compare);
    this.estimateEquipes();
    this.showLista = !this.showLista;
  }

  calculateMedia() {
    this.jogadores.forEach(jogador => {
      jogador.med = parseFloat((
        ((jogador.vel + jogador.sho + jogador.pas + jogador.dri + jogador.def + jogador.phy) / 6) / 2)
        .toFixed());
    })
  }

  getMaiorValor() {
    let maiorValor = 0;
    this.jogadores.forEach(jogador => {
      if ((jogador.med > maiorValor) && !jogador.team) {
        maiorValor = jogador.med;
      }
    });
    return maiorValor;
  }

  getMenorValor() {
    let menorValor = 11;
    this.jogadores.forEach(jogador => {
      if ((jogador.med < menorValor) && !jogador.team) {
        menorValor = jogador.med;
      }
    });
    return menorValor;
  }

  getJogadorByValue(value) {
    let choosenPlayers = new Array();
    this.jogadores.forEach(jogador => {
      if (jogador.med == value) {
        if (!jogador.team) {
          choosenPlayers.push(jogador);
        }
      }
    });
    const random = Math.floor(Math.random() * choosenPlayers.length);
    return choosenPlayers[random];
  }

  generateEquipes(qtd) {

    for (let i = 1; i < (qtd + 1); i++) {
      let value = this.getMaiorValor();
      let jogador = this.getJogadorByValue(value);
      if (jogador) { jogador.team = i }
    }

    for (let i = 1; i < (qtd + 1); i++) {
      let value = this.getMenorValor();
      let jogador = this.getJogadorByValue(value);
      if (jogador) { jogador.team = i }
    }

    for (let i = 1; i < (qtd + 1); i++) {
      let value = this.getMaiorValor();
      let jogador = this.getJogadorByValue(value);
      if (jogador) { jogador.team = i }
    }

    for (let i = 1; i < (qtd + 1); i++) {
      let value = this.getMenorValor();
      let jogador = this.getJogadorByValue(value);
      if (jogador) { jogador.team = i }
    }

  }

  compare(a, b) {

    const bandA = a.team;
    const bandB = b.team;

    let comparison = 0;
    if (bandA > bandB) {
      comparison = 1;
    } else if (bandA < bandB) {
      comparison = -1;
    }
    return comparison;
  }

  setCapitains(a, b) {
    const bandA = parseInt(a.med);
    const bandB = parseInt(b.med);

    let comparison = 0;
    if (bandA < bandB) {
      comparison = 1;
    } else if (bandA > bandB) {
      comparison = -1;
    }
    return comparison;
  }

  estimateEquipes() {

    let timeA =
    {
      jogadores: new Array(),
      statsVEL: 0, statsSHO: 0, statsPAS: 0,
      statsDRI: 0, statsDEF: 0, statsPHY: 0,
      statsMED: 0, totalPts: 0, nome: ''
    }
    let timeB = {
      jogadores: new Array(),
      statsVEL: 0, statsSHO: 0, statsPAS: 0,
      statsDRI: 0, statsDEF: 0, statsPHY: 0,
      statsMED: 0, totalPts: 0, nome: ''
    }
    let timeC = {
      jogadores: new Array(),
      statsVEL: 0, statsSHO: 0, statsPAS: 0,
      statsDRI: 0, statsDEF: 0, statsPHY: 0,
      statsMED: 0, totalPts: 0, nome: ''
    }
    let timeD = {
      jogadores: new Array(),
      statsVEL: 0, statsSHO: 0, statsPAS: 0,
      statsDRI: 0, statsDEF: 0, statsPHY: 0,
      statsMED: 0, totalPts: 0, nome: ''
    }
    let timeE = {
      jogadores: new Array(),
      statsVEL: 0, statsSHO: 0, statsPAS: 0,
      statsDRI: 0, statsDEF: 0, statsPHY: 0,
      statsMED: 0, totalPts: 0, nome: ''
    }
    let timeF = {
      jogadores: new Array(),
      statsVEL: 0, statsSHO: 0, statsPAS: 0,
      statsDRI: 0, statsDEF: 0, statsPHY: 0,
      statsMED: 0, totalPts: 0, nome: ''
    }
    let outTime = new Array();

    this.jogadores.forEach(jogador => {
      if (jogador.team == 1) {
        timeA.jogadores.push(jogador);
      } else if (jogador.team == 2) {
        timeB.jogadores.push(jogador);
      } else if (jogador.team == 3) {
        timeC.jogadores.push(jogador);
      } else if (jogador.team == 4) {
        timeD.jogadores.push(jogador);
      } else if (jogador.team == 5) {
        timeE.jogadores.push(jogador);
      } else if (jogador.team == 6) {
        timeF.jogadores.push(jogador);
      } else if (!jogador.team) {
        outTime.push(jogador);
      }
    })

    timeA.statsVEL = 60;
    timeA.statsSHO = 60;
    timeA.statsPAS = 60;
    timeA.statsDRI = 60;
    timeA.statsDEF = 60;
    timeA.statsPHY = 60;
    timeA.statsMED = 60;
    timeA.nome = 'Time A';
    timeA.jogadores.forEach(jogador => {
      timeA.statsVEL += jogador.vel;
      timeA.statsSHO += jogador.sho;
      timeA.statsPAS += jogador.pas;
      timeA.statsDRI += jogador.dri;
      timeA.statsDEF += jogador.def;
      timeA.statsPHY += jogador.phy;
      timeA.statsMED += jogador.med;
    });
    timeA.statsMED = parseFloat((timeA.statsMED / 10).toFixed(1));
    timeA.totalPts = 400 +
      timeA.statsVEL + timeA.statsSHO +
      timeA.statsPAS + timeA.statsDRI +
      timeA.statsDEF + timeA.statsPHY;

    timeB.statsVEL = 60;
    timeB.statsSHO = 60;
    timeB.statsPAS = 60;
    timeB.statsDRI = 60;
    timeB.statsDEF = 60;
    timeB.statsPHY = 60;
    timeB.statsMED = 60;
    timeB.nome = 'Time B';
    timeB.jogadores.forEach(jogador => {
      timeB.statsVEL += jogador.vel;
      timeB.statsSHO += jogador.sho;
      timeB.statsPAS += jogador.pas;
      timeB.statsDRI += jogador.dri;
      timeB.statsDEF += jogador.def;
      timeB.statsPHY += jogador.phy;
      timeB.statsMED += jogador.med;
    });
    timeB.statsMED = parseFloat((timeB.statsMED / 10).toFixed(1));
    timeB.totalPts = 400 +
      timeB.statsVEL + timeB.statsSHO +
      timeB.statsPAS + timeB.statsDRI +
      timeB.statsDEF + timeB.statsPHY;

    timeC.statsVEL = 60;
    timeC.statsSHO = 60;
    timeC.statsPAS = 60;
    timeC.statsDRI = 60;
    timeC.statsDEF = 60;
    timeC.statsPHY = 60;
    timeC.statsMED = 60;
    timeC.nome = 'Time C';
    timeC.jogadores.forEach(jogador => {
      timeC.statsVEL += jogador.vel;
      timeC.statsSHO += jogador.sho;
      timeC.statsPAS += jogador.pas;
      timeC.statsDRI += jogador.dri;
      timeC.statsDEF += jogador.def;
      timeC.statsPHY += jogador.phy;
      timeC.statsMED += jogador.med;
    });
    timeC.statsMED = parseFloat((timeC.statsMED / 10).toFixed(1));
    timeC.totalPts = 400 +
      timeC.statsVEL + timeC.statsSHO +
      timeC.statsPAS + timeC.statsDRI +
      timeC.statsDEF + timeC.statsPHY;

    timeD.statsVEL = 60;
    timeD.statsSHO = 60;
    timeD.statsPAS = 60;
    timeD.statsDRI = 60;
    timeD.statsDEF = 60;
    timeD.statsPHY = 60;
    timeD.statsMED = 60;
    timeD.nome = 'Time D';
    timeD.jogadores.forEach(jogador => {
      timeD.statsVEL += jogador.vel;
      timeD.statsSHO += jogador.sho;
      timeD.statsPAS += jogador.pas;
      timeD.statsDRI += jogador.dri;
      timeD.statsDEF += jogador.def;
      timeD.statsPHY += jogador.phy;
      timeD.statsMED += jogador.med;
    });
    timeD.statsMED = parseFloat((timeD.statsMED / 10).toFixed(1));
    timeD.totalPts = 400 +
      timeD.statsVEL + timeD.statsSHO +
      timeD.statsPAS + timeD.statsDRI +
      timeD.statsDEF + timeD.statsPHY;

    timeE.statsVEL = 60;
    timeE.statsSHO = 60;
    timeE.statsPAS = 60;
    timeE.statsDRI = 60;
    timeE.statsDEF = 60;
    timeE.statsPHY = 60;
    timeE.statsMED = 60;
    timeE.nome = 'Time E';
    timeE.jogadores.forEach(jogador => {
      timeE.statsVEL += jogador.vel;
      timeE.statsSHO += jogador.sho;
      timeE.statsPAS += jogador.pas;
      timeE.statsDRI += jogador.dri;
      timeE.statsDEF += jogador.def;
      timeE.statsPHY += jogador.phy;
      timeE.statsMED += jogador.med;
    });
    timeE.statsMED = parseFloat((timeE.statsMED / 10).toFixed(1));
    timeE.totalPts = 400 +
      timeE.statsVEL + timeE.statsSHO +
      timeE.statsPAS + timeE.statsDRI +
      timeE.statsDEF + timeE.statsPHY;

    timeF.statsVEL = 60;
    timeF.statsSHO = 60;
    timeF.statsPAS = 60;
    timeF.statsDRI = 60;
    timeF.statsDEF = 60;
    timeF.statsPHY = 60;
    timeF.statsMED = 60;
    timeF.nome = 'Time F';
    timeF.jogadores.forEach(jogador => {
      timeF.statsVEL += jogador.vel;
      timeF.statsSHO += jogador.sho;
      timeF.statsPAS += jogador.pas;
      timeF.statsDRI += jogador.dri;
      timeF.statsDEF += jogador.def;
      timeF.statsPHY += jogador.phy;
      timeF.statsMED += jogador.med;
    });
    timeF.statsMED = parseFloat((timeF.statsMED / 10).toFixed(1));
    timeF.totalPts = 400 +
      timeF.statsVEL + timeF.statsSHO +
      timeF.statsPAS + timeF.statsDRI +
      timeF.statsDEF + timeF.statsPHY;

    timeA.jogadores.sort(this.setCapitains);
    timeB.jogadores.sort(this.setCapitains);
    timeC.jogadores.sort(this.setCapitains);
    timeD.jogadores.sort(this.setCapitains);
    timeE.jogadores.sort(this.setCapitains);
    timeF.jogadores.sort(this.setCapitains);

    this.jogadores.sort(this.setCapitains);

    this.timesArray.push(timeA);
    this.timesArray.push(timeB);
    this.timesArray.push(timeC);
    this.timesArray.push(timeD);
    this.timesArray.push(timeE);
    this.timesArray.push(timeF);
    this.outTime = outTime;

    this.jogadores.forEach(jogador => {
      console.log(jogador.nome + " = " + jogador.med);
    })

  }

}
