import {Component} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-multicast',
  templateUrl: './multicast.component.html',
  styleUrls: ['./multicast.component.css']
})
export class MulticastComponent{
  constructor(private titleService: Title) {
  }
}
