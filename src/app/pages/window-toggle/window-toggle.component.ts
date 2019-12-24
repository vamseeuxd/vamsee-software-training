import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-window-toggle',
  templateUrl: './window-toggle.component.html',
  styleUrls: ['./window-toggle.component.css']
})
export class WindowToggleComponent {
  constructor(private titleService: Title) {
  }
}
