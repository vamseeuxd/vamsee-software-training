import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-dematerialize',
  templateUrl: './dematerialize.component.html',
  styleUrls: ['./dematerialize.component.css']
})
export class DematerializeComponent{
  constructor(private titleService: Title) {
  }
}
