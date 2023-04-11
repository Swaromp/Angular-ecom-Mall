import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'del'
})
export class DelPipe implements PipeTransform {

  transform(value: any, flag: any): any {
    if(flag) {
      return value.filter((value: { del: boolean }) => {
        return (value.del);
    })
    }
    else {
      return value
    }
  }

}
