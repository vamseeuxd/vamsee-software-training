import {Component} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-window-count',
  templateUrl: './window-count.component.html',
  styleUrls: ['./window-count.component.css']
})
export class WindowCountComponent {
  constructor(private titleService: Title) {
  }
}
