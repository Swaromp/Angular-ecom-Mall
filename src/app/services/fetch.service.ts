import { Injectable } from '@angular/core';
import { AsyncSubject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchService {
  subject= new BehaviorSubject('');
  subject1=new BehaviorSubject('');
  constructor() { }
}
