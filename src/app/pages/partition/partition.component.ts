import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-partition',
  templateUrl: './partition.component.html',
  styleUrls: ['./partition.component.css']
})
export class PartitionComponent {
  constructor(private titleService: Title) {
  }
}
