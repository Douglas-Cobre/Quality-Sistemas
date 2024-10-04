import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefone',
  standalone: true
})
export class TelefonePipe implements PipeTransform {

  transform(value: String, ...args: any[]): String {
    if (!value) return '';

    // Remove caracteres não numéricos
    const cleanValue = value.replace(/\D/g, '');

    // Verifica se o telefone tem o comprimento correto
    if (cleanValue.length < 10 || cleanValue.length > 11) {
      return 'Número inválido';
    }

    // Formata o telefone
    if (cleanValue.length === 11) {
      return `(${cleanValue.slice(0, 2)}) ${cleanValue.slice(2, 7)}-${cleanValue.slice(7)}`;
    } else {
      return `(${cleanValue.slice(0, 2)}) ${cleanValue.slice(2, 6)}-${cleanValue.slice(6)}`;
    }
  }
}
