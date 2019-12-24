import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-ignore-elements',
  templateUrl: './ignore-elements.component.html',
  styleUrls: ['./ignore-elements.component.css']
})
export class IgnoreElementsComponent{
  constructor(private titleService: Title) {
  }
}
