import {Component} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-default-if-empty',
  templateUrl: './default-if-empty.component.html',
  styleUrls: ['./default-if-empty.component.css']
})
export class DefaultIfEmptyComponent{
  constructor(private titleService: Title) {
  }
}
