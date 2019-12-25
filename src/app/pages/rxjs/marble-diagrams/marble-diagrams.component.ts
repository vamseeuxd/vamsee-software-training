import {Component} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-marble-diagrams',
  templateUrl: './marble-diagrams.component.html',
  styleUrls: ['./marble-diagrams.component.css']
})
export class MarbleDiagramsComponent{
  constructor(private titleService: Title) {
  }
}
