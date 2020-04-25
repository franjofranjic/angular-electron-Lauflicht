import { Component, OnInit } from '@angular/core';
import {ConfigService} from '../config.service';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  patterns: Config[] = [
    {value: 0, viewValue: 'Muster 1'},
    {value: 1, viewValue: 'Muster 2'},
    {value: 2, viewValue: 'Muster 3'},
    {value: 3, viewValue: 'Muster 4'}
  ];

  directions: Config[] = [
    {value: 0, viewValue: 'Rechts'},
    {value: 1, viewValue: 'Links'}
  ];

  onoffmodi: Config[] = [
    {value: 0, viewValue: 'aus'},
    {value: 1, viewValue: 'an'}
  ]

  automatik = this.onoffmodi[0].viewValue;
  disco = this.onoffmodi[0].viewValue;
  velocity = 160;
  direction = this.directions[0].viewValue;
  pattern = this.patterns[0].viewValue;
  config = {};

  constructor(private service: ConfigService) { }

  ngOnInit() {
    // this.service.configSelected.subscribe(
    //   value => this.config = value,
    //   console.log('hei')
    // );
    console.log(this.config);
  }

}

interface Config {
  value: number;
  viewValue: string;
}

