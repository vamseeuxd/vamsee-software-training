import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-from-event-pattern',
  templateUrl: './from-event-pattern.component.html',
  styleUrls: ['./from-event-pattern.component.css']
})
export class FromEventPatternComponent{
  constructor(private titleService: Title) {
  }
}
