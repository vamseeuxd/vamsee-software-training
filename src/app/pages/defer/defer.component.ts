import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-defer',
  templateUrl: './defer.component.html',
  styleUrls: ['./defer.component.css']
})
export class DeferComponent{
  constructor(private titleService: Title) {
  }
}
