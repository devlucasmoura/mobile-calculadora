import { Component } from '@angular/core';
import { Router } from '@angular/router';

type Unidade = 'C' | 'F' | 'K';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.page.html',
  styleUrls: ['./conversor.page.scss'],
  standalone: false,
})
export class ConversorPage {
  valorEntrada: string = '';
  unidadeOrigem: Unidade = 'C';

  resultadoCelsius: string    = '--';
  resultadoFahrenheit: string = '--';
  resultadoKelvin: string     = '--';

  constructor(private router: Router) {}

  // Atualiza os resultados toda vez que o input muda
  converter() {
    const valor = parseFloat(this.valorEntrada);

    if (isNaN(valor)) {
      this.resultadoCelsius = this.resultadoFahrenheit = this.resultadoKelvin = '--';
      return;
    }

    // Primeiro converte o valor recebido para Celsius
    const celsius = this.paraCelsius(valor, this.unidadeOrigem);

    this.resultadoCelsius    = celsius.toFixed(2) + ' °C';
    this.resultadoFahrenheit = (celsius * 9 / 5 + 32).toFixed(2) + ' °F';
    this.resultadoKelvin     = (celsius + 273.15).toFixed(2) + ' K';
  }

  private paraCelsius(valor: number, unidade: Unidade): number {
    switch (unidade) {
      case 'C': return valor;
      case 'F': return (valor - 32) * 5 / 9;
      case 'K': return valor - 273.15;
    }
  }

  voltar() {
    this.router.navigate(['/home']);
  }
}
