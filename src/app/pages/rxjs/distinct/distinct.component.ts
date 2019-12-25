import {Component} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-distinct',
  templateUrl: './distinct.component.html',
  styleUrls: ['./distinct.component.css']
})
export class DistinctComponent{
  constructor(private titleService: Title) {
  }
}
