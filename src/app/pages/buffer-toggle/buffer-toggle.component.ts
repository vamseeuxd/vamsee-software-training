import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-buffer-toggle',
  templateUrl: './buffer-toggle.component.html',
  styleUrls: ['./buffer-toggle.component.css']
})
export class BufferToggleComponent {
  constructor(private titleService: Title) {
  }
}
