import {Component} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-skip-last',
  templateUrl: './skip-last.component.html',
  styleUrls: ['./skip-last.component.css']
})
export class SkipLastComponent{
  constructor(private titleService: Title) {
  }
}
