import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-publish-behavior',
  templateUrl: './publish-behavior.component.html',
  styleUrls: ['./publish-behavior.component.css']
})
export class PublishBehaviorComponent{
  constructor(private titleService: Title) {
  }
}
