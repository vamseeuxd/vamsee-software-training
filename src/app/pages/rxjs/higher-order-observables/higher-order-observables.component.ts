import {Component} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-higher-order-observables',
  templateUrl: './higher-order-observables.component.html',
  styleUrls: ['./higher-order-observables.component.css']
})
export class HigherOrderObservablesComponent{
  constructor(private titleService: Title) {
  }
}
