import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emifilter'
})
export class EmifilterPipe implements PipeTransform {

  transform(value: any, high: any, low: any): any {
    
    return value.filter((value: { price: number; }) => {
      
      return (low ? value.price/9 >= low : true) && (high ? value.price/9 <= high : true);

    })

  }

}
