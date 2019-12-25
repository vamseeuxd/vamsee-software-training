import {Component} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-exhaust',
  templateUrl: './exhaust.component.html',
  styleUrls: ['./exhaust.component.css']
})
export class ExhaustComponent {
  constructor(private titleService: Title) {
  }
}
