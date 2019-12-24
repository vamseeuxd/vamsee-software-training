import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-time-interval',
  templateUrl: './time-interval.component.html',
  styleUrls: ['./time-interval.component.css']
})
export class TimeIntervalComponent{
  constructor(private titleService: Title) {
  }
}
