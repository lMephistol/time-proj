import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {


  transform(items: string[] | null, term: string[] | null): string[] {
    if (items === null || items.length === 0) {
      return [];
    }
    if (term === null || term.length === 0) {
      return items;
    }
    return items.filter(item => term.indexOf(item) === -1);
  }
}
