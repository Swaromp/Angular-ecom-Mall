import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'down'
})
export class DownPipe implements PipeTransform {

  transform(value: any, flag: any): any {
    if(flag) {
      return value.filter((value: { dp: boolean }) => {
        return (value.dp);
    })
    }
    else {
      return value
    }
  }

}
