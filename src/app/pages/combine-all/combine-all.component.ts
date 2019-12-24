import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-combine-all',
  templateUrl: './combine-all.component.html',
  styleUrls: ['./combine-all.component.css']
})
export class CombineAllComponent{
  constructor(private titleService: Title) {
  }
}
