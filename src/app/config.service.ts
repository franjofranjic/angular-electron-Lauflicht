import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  configSelected = new EventEmitter<any>();
  activated = new EventEmitter<boolean>();

  constructor() { }

}
