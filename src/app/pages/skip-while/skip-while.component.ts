import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-skip-while',
  templateUrl: './skip-while.component.html',
  styleUrls: ['./skip-while.component.css']
})
export class SkipWhileComponent{
  constructor(private titleService: Title) {
  }
}
