import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  // O que está sendo exibido no visor
  visor: string = '0';

  // Guarda o primeiro operando e a operação escolhida
  private operandoAnterior: number | null = null;
  private operacao: string | null = null;
  private aguardandoNovo: boolean = false;

  constructor(private router: Router) {}

  // Chamado quando o usuário pressiona um dígito (0–9) ou o ponto decimal
  pressionarNumero(valor: string) {
    if (this.aguardandoNovo) {
      this.visor = valor === '.' ? '0.' : valor;
      this.aguardandoNovo = false;
      return;
    }

    if (valor === '.' && this.visor.includes('.')) return;

    this.visor = this.visor === '0' && valor !== '.' ? valor : this.visor + valor;
  }

  // Chamado quando o usuário escolhe +, -, × ou ÷
  pressionarOperacao(op: string) {
    const valorAtual = parseFloat(this.visor);

    if (this.operandoAnterior !== null && !this.aguardandoNovo) {
      this.visor = String(this.calcular(this.operandoAnterior, valorAtual, this.operacao!));
    }

    this.operandoAnterior = parseFloat(this.visor);
    this.operacao = op;
    this.aguardandoNovo = true;
  }

  // Calcula o resultado quando o usuário pressiona "="
  igual() {
    if (this.operandoAnterior === null || this.operacao === null) return;

    const valorAtual = parseFloat(this.visor);
    const resultado = this.calcular(this.operandoAnterior, valorAtual, this.operacao);

    this.visor = String(resultado);
    this.operandoAnterior = null;
    this.operacao = null;
    this.aguardandoNovo = true;
  }

  // Lógica central: executa a operação matemática
  private calcular(a: number, b: number, op: string): number {
    switch (op) {
      case '+': return a + b;
      case '-': return a - b;
      case '×': return a * b;
      case '÷': return b !== 0 ? a / b : 0;
      default:  return b;
    }
  }

  // Limpa tudo e volta ao estado inicial
  limpar() {
    this.visor = '0';
    this.operandoAnterior = null;
    this.operacao = null;
    this.aguardandoNovo = false;
  }

  // Remove o último caractere digitado
  apagar() {
    if (this.aguardandoNovo) return;
    this.visor = this.visor.length > 1 ? this.visor.slice(0, -1) : '0';
  }

  // Navega para a página do Conversor de Temperatura
  irParaConversor() {
    this.router.navigate(['/conversor']);
  }
}
