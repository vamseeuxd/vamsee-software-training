import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-observe-on',
  templateUrl: './observe-on.component.html',
  styleUrls: ['./observe-on.component.css']
})
export class ObserveOnComponent{
  constructor(private titleService: Title) {
  }
}
