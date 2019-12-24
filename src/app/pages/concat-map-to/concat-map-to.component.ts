import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-concat-map-to',
  templateUrl: './concat-map-to.component.html',
  styleUrls: ['./concat-map-to.component.css']
})
export class ConcatMapToComponent {
  constructor(private titleService: Title) {
  }
}
