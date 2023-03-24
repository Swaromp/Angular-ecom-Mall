import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'totalAmount'
})
export class TotalAmountPipe implements PipeTransform {

  transform(value:any)  {
    return value + 400 - 5000;
  }

}
