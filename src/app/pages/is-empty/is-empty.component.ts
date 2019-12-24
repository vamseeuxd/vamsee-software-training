import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-is-empty',
  templateUrl: './is-empty.component.html',
  styleUrls: ['./is-empty.component.css']
})
export class IsEmptyComponent{
  constructor(private titleService: Title) {
  }
}
