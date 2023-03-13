import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pricefilter'
})
export class PricefilterPipe implements PipeTransform {




  transform(value: any, high: any, low: any): any {
    
    return value.filter((value: { price: number; }) => {
      
      return (low ? value.price >= low : true) && (high ? value.price <= high : true);

    })

  }

}
