import {Component} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-find-index',
  templateUrl: './find-index.component.html',
  styleUrls: ['./find-index.component.css']
})
export class FindIndexComponent{
  constructor(private titleService: Title) {
  }
}
