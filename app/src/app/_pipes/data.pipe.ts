import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'data',
  standalone: true
})
export class DataPipe implements PipeTransform {

  transform(value: any, ...args: any[]): string {
    if (!value) return '';

    const date = new Date(value);
    if (isNaN(date.getTime())) {
      return 'Data inválida';
    }

    // Formata a data no formato DD/MM/AAAA
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Os meses vão de 0 a 11
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }
}
