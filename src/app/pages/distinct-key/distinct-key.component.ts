import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-distinct-key',
  templateUrl: './distinct-key.component.html',
  styleUrls: ['./distinct-key.component.css']
})
export class DistinctKeyComponent{
  constructor(private titleService: Title) {
  }
}
