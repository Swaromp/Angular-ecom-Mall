import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(value: any, ) {
    if(value.length > 20 ){
      return value.substr(0 , 20) + '....';
    }
   else{
    return value
   }
  }

}
