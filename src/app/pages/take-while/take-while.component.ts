import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-take-while',
  templateUrl: './take-while.component.html',
  styleUrls: ['./take-while.component.css']
})
export class TakeWhileComponent{
  constructor(private titleService: Title) {
  }
}
