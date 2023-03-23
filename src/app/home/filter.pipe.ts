
// @Pipe({
//   name: 'filter'
// })
// export class FilterPipe implements PipeTransform {

//   transform(value: any[], filterBy: any): any[] {
//     if (!value) return [];

//     if (!filterBy || Object.keys(filterBy).length === 0) return value;

//     return value.filter((item) =>
//       Object.entries(filterBy).every(([key, value]) => item[key].toLowerCase().includes(value.toLowerCase()))
//     );
//   }

// }
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterBy: any): any[] {
    if(!value) return [];
    if(!filterBy || Object.keys(filterBy).length == 0) return value;

    return value.filter((item) => 
    Object.entries(filterBy).every(([key, value]) => item[key].toLowerCase().inclueds(value))
    )
  }

}




