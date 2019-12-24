import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-sample-time',
  templateUrl: './sample-time.component.html',
  styleUrls: ['./sample-time.component.css']
})
export class SampleTimeComponent{
  constructor(private titleService: Title) {
  }
}
