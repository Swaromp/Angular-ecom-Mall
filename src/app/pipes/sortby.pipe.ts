import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByProperty'
})
export class SortByPropertyPipe implements PipeTransform {
  transform(array: any[], property: string): any[] {
    if (!array || !property) {
      return array;
    }

    return array.sort((a: any, b: any) => {
      if (a[property] < b[property]) {
        return -1;
      } else if (a[property] > b[property]) {
        return 1;
      } else {
        return 0;
      }
    });
  }
}
