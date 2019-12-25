import {Component} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-merge-map-to',
  templateUrl: './merge-map-to.component.html',
  styleUrls: ['./merge-map-to.component.css']
})
export class MergeMapToComponent {
  constructor(private titleService: Title) {
  }
}
