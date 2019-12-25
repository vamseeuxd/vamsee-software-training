import {Component} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-window-time',
  templateUrl: './window-time.component.html',
  styleUrls: ['./window-time.component.css']
})
export class WindowTimeComponent {
  constructor(private titleService: Title) {
  }
}
