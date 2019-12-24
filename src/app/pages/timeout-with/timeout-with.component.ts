import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-timeout-with',
  templateUrl: './timeout-with.component.html',
  styleUrls: ['./timeout-with.component.css']
})
export class TimeoutWithComponent{
  constructor(private titleService: Title) {
  }
}
