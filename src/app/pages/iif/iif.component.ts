import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-iif',
  templateUrl: './iif.component.html',
  styleUrls: ['./iif.component.css']
})
export class IifComponent{
  constructor(private titleService: Title) {
  }
}
