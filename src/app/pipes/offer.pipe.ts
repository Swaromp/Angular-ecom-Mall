import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'offer'
})
export class OfferPipe implements PipeTransform {

  transform(value: any, flag: any): any {
    if(flag) {
      return value.filter((value: { offer: boolean }) => {
        return (value.offer);
    })
    }
    else {
      return value
    }
  }
  
}
