import {Component} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-bind-node-callback',
  templateUrl: './bind-node-callback.component.html',
  styleUrls: ['./bind-node-callback.component.css']
})
export class BindNodeCallbackComponent{
  constructor(private titleService: Title) {
  }
}
