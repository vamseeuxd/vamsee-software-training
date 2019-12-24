import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-skip-until',
  templateUrl: './skip-until.component.html',
  styleUrls: ['./skip-until.component.css']
})
export class SkipUntilComponent{
  constructor(private titleService: Title) {
  }
}
