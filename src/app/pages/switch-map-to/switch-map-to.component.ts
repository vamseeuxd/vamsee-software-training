import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-switch-map-to',
  templateUrl: './switch-map-to.component.html',
  styleUrls: ['./switch-map-to.component.css']
})
export class SwitchMapToComponent {
  constructor(private titleService: Title) {
  }
}
