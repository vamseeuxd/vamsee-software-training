import {Component} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-piping',
  templateUrl: './piping.component.html',
  styleUrls: ['./piping.component.css']
})
export class PipingComponent{
  constructor(private titleService: Title) {
  }
}
