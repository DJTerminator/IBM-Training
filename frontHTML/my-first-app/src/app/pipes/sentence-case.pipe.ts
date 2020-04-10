import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sentenceCase'
})
export class SentenceCasePipe implements PipeTransform {

  transform(value: string): string {
    if (value === null) return 'Not assigned';
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase;
  }

}
