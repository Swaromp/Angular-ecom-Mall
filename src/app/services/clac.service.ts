import { Injectable } from '@angular/core';
import { BehaviorSubject,  } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ClacService {
  tenureSub= new BehaviorSubject('');
  rateSub=new BehaviorSubject('');
  salarySub= new BehaviorSubject('');
  constructor() { }
}
