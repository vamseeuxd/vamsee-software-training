import {Component} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-window-when',
  templateUrl: './window-when.component.html',
  styleUrls: ['./window-when.component.css']
})
export class WindowWhenComponent {
  constructor(private titleService: Title) {
  }
}
