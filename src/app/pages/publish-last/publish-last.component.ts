import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-publish-last',
  templateUrl: './publish-last.component.html',
  styleUrls: ['./publish-last.component.css']
})
export class PublishLastComponent{
  constructor(private titleService: Title) {
  }
}
