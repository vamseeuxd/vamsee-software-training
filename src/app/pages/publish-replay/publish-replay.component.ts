import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-publish-replay',
  templateUrl: './publish-replay.component.html',
  styleUrls: ['./publish-replay.component.css']
})
export class PublishReplayComponent{
  constructor(private titleService: Title) {
  }
}
