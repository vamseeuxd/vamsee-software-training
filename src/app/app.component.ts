import {Component} from '@angular/core';
import {MenuInterface} from './components/app-side-menu/app-side-menu.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showSideMenu = true;
  menuData: MenuInterface[] = [
    {id: 'welcome', name: 'Welcome'},
    {
      id: 'transformationOperators', name: 'Transformation Operators', subMenu: [
        {id: 'buffer', name: '01. buffer'},
        {id: 'bufferCount', name: '02. bufferCount'},
        {id: 'bufferTime', name: '03. bufferTime'},
        {id: 'bufferToggle', name: '04. bufferToggle'},
        {id: 'bufferWhen', name: '05. bufferWhen'},
        {id: 'concatMap', name: '06. concatMap'},
        {id: 'concatMapTo', name: '07. concatMapTo'},
        {id: 'exhaust', name: '08. exhaust'},
        {id: 'exhaustMap', name: '09. exhaustMap'},
        {id: 'expand', name: '10. expand'},
        {id: 'groupBy', name: '11. groupBy'},
        {id: 'map', name: '12. map'},
        {id: 'mapTo', name: '13. mapTo'},
        {id: 'mergeMap', name: '14. mergeMap'},
        {id: 'mergeMapTo', name: '15. mergeMapTo'},
        {id: 'mergeScan', name: '16. mergeScan'},
        {id: 'pairwise', name: '17. pairwise'},
        {id: 'partition', name: '18. partition'},
        {id: 'pluck', name: '19. pluck'},
        {id: 'scan', name: '20. scan'},
        {id: 'switchMap', name: '21. switchMap'},
        {id: 'switchMapTo', name: '22. switchMapTo'},
        {id: 'window', name: '23. window'},
        {id: 'windowCount', name: '24. windowCount'},
        {id: 'windowTime', name: '25. windowTime'},
        {id: 'windowToggle', name: '26. windowToggle'},
        {id: 'windowWhen', name: '27. windowWhen'},
      ]
    },
  ];
  activeMenu = 'welcome';

  changeActivePage($event: string) {
    alert($event);
  }
}
