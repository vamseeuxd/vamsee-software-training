import {Component} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-group-by',
  templateUrl: './group-by.component.html',
  styleUrls: ['./group-by.component.css']
})
export class GroupByComponent {
  constructor(private titleService: Title) {
  }
}
