import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  quantidadeCigarrosPorDia: number = 0;
  quantidadeDeAnosFumando: number = 0;
  tempoDeVidaPerdida: number = 0;
  barra: number = 0;
  FotoCoracao: number = 8;

  constructor() {}

  calcularTempoDeVidaPerdida(){
    this.barra = 0;
    const diasPorAno = 360;
    const minutosPeridoPorCigarro = 10;
    const minutosPorDia = 24*60;
    let quantidadeDiasFumando = this.quantidadeDeAnosFumando * diasPorAno;
    let totalCigarrosFumado = quantidadeDiasFumando * this.quantidadeCigarrosPorDia;
    this.tempoDeVidaPerdida = totalCigarrosFumado * minutosPeridoPorCigarro;
    this.tempoDeVidaPerdida = this.tempoDeVidaPerdida / minutosPorDia;

    if(this.tempoDeVidaPerdida < 30) {
      this.FotoCoracao = 10;
    }
    
    else if(this.tempoDeVidaPerdida < 60){
      this.FotoCoracao = 8;
    }
    
    else if(this.tempoDeVidaPerdida < 120){
      this.FotoCoracao = 6;
    }
   
    else
    this.FotoCoracao = 4;
  }

}
