import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-throttle-time',
  templateUrl: './throttle-time.component.html',
  styleUrls: ['./throttle-time.component.css']
})
export class ThrottleTimeComponent{
  constructor(private titleService: Title) {
  }
}
