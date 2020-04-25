import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  // configSelected = new EventEmitter

  constructor() { }

}

interface ConfigObject {
  value: number;
  viewValue: string;
}
