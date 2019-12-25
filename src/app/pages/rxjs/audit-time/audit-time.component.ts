import {Component} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-audit-time',
  templateUrl: './audit-time.component.html',
  styleUrls: ['./audit-time.component.css']
})
export class AuditTimeComponent{
  constructor(private titleService: Title) {
  }
}
