import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpf',
  standalone: true
})
export class CpfPipe implements PipeTransform {

  transform(value: String, ...args: any[]): String {
    if (!value) return '';

    // Remove caracteres não numéricos
    const cleanValue = value.replace(/\D/g, '');

    // Verifica se o CPF tem 11 dígitos
    if (cleanValue.length !== 11) {
      return 'CPF inválido';
    }

    // Formata o CPF
    return cleanValue.replace(/(\d{3})(\d)/, '$1.$2')
                     .replace(/(\d{3})(\d)/, '$1.$2')
                     .replace(/(\d{2})(\d{1,2})$/, '$1-$2');
  }
}
