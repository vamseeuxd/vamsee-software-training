import {Component} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-merge-scan',
  templateUrl: './merge-scan.component.html',
  styleUrls: ['./merge-scan.component.css']
})
export class MergeScanComponent {
  constructor(private titleService: Title) {
  }
}
