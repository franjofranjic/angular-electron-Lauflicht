import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css']
})
export class ControllerComponent implements OnInit {


  automatikBtn = 'aus';
  discoBtn = 'aus';
  config = {};
  velocity = 160;
  discomode = 0;
  automatikmode = 0;
  direction = 0;
  pattern = 0;

  patterns: ConfigObject[] = [
    {value: 0, viewValue: 'Muster 1'},
    {value: 1, viewValue: 'Muster 2'},
    {value: 2, viewValue: 'Muster 3'},
    {value: 3, viewValue: 'Muster 4'}
  ];

  directions: ConfigObject[] = [
    {value: 0, viewValue: 'Rechts'},
    {value: 1, viewValue: 'Links'}
  ];

  constructor(private service: ConfigService) { }

  ngOnInit() {
    this.setConfig();
  }

  setAutomatik() {
    if (!this.automatikmode) {
      this.automatikmode = 1;
      this.discomode = 0;
      this.automatikBtn = 'an';
      this.discoBtn = 'aus';
    } else {
      this.automatikmode = 0;
      this.automatikBtn = 'aus';
    }

    this.setConfig();
  }

  setDisco() {
    if (!this.discomode) {
      this.discomode = 1;
      this.automatikmode = 0;
      this.automatikBtn = 'aus';
      this.discoBtn = 'an';
    } else {
      this.discomode = 0;
      this.discoBtn = 'aus';
    }

    this.setConfig();
  }

  setConfig() {
    this.config = {
      automatik: this.automatikmode,
      disco: this.discomode,
      direction: this.direction,
      pattern: this.pattern,
      velocity: this.velocity
    };


    // this.service.configSelected.emit(this.config);
  }
}

interface ConfigObject {
  value: number;
  viewValue: string;
}
