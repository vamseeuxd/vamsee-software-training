import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-map-to',
  templateUrl: './map-to.component.html',
  styleUrls: ['./map-to.component.css']
})
export class MapToComponent {
  constructor(private titleService: Title) {
  }
}
