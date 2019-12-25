import {Component} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-delay-when',
  templateUrl: './delay-when.component.html',
  styleUrls: ['./delay-when.component.css']
})
export class DelayWhenComponent{
  constructor(private titleService: Title) {
  }
}
