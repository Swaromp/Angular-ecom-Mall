import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calc'
})

export class CalcPipe implements PipeTransform {
  transform(salary: number, tenure: number,rate : number ): number {
   const E = salary/2
   const n = tenure*12
   const r = rate/12
   const p= n*E*((1+r)^(n - 1))/(r*(1 + r)^n)
   return p
    
  }


}


