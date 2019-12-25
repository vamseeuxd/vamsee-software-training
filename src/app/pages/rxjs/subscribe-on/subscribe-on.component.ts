import {Component} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-subscribe-on',
  templateUrl: './subscribe-on.component.html',
  styleUrls: ['./subscribe-on.component.css']
})
export class SubscribeOnComponent{
  constructor(private titleService: Title) {
  }
}
