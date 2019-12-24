import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-distinct-until-key-changed',
  templateUrl: './distinct-until-key-changed.component.html',
  styleUrls: ['./distinct-until-key-changed.component.css']
})
export class DistinctUntilKeyChangedComponent{
  constructor(private titleService: Title) {
  }
}
