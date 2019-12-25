import {Component} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-bind-callback',
  templateUrl: './bind-callback.component.html',
  styleUrls: ['./bind-callback.component.css']
})
export class BindCallbackComponent{
  constructor(private titleService: Title) {
  }
}
