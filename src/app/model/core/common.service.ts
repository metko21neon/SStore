import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private headerSource = new Subject<string>();
  headerObservable$ = this.headerSource.asObservable();
  constructor() { }

  changeHeader(header: string) {
    this.headerSource.next(header);
  }
}
