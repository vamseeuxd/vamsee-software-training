import {Component} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-materialize',
  templateUrl: './materialize.component.html',
  styleUrls: ['./materialize.component.css']
})
export class MaterializeComponent{
  constructor(private titleService: Title) {
  }
}
