import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-element-at',
  templateUrl: './element-at.component.html',
  styleUrls: ['./element-at.component.css']
})
export class ElementAtComponent{
  constructor(private titleService: Title) {
  }
}
