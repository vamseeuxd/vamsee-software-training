import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-merge-all',
  templateUrl: './merge-all.component.html',
  styleUrls: ['./merge-all.component.css']
})
export class MergeAllComponent{
  constructor(private titleService: Title) {
  }
}
