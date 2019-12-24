import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-take-last',
  templateUrl: './take-last.component.html',
  styleUrls: ['./take-last.component.css']
})
export class TakeLastComponent{
  constructor(private titleService: Title) {
  }
}
