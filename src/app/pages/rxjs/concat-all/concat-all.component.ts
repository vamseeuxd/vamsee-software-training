import {Component} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-concat-all',
  templateUrl: './concat-all.component.html',
  styleUrls: ['./concat-all.component.css']
})
export class ConcatAllComponent{
  constructor(private titleService: Title) {
  }
}
