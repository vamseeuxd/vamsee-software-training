import {Component, OnInit} from '@angular/core';
import {MenuInterface} from './components/app-side-menu/app-side-menu.component';
import {Router} from '@angular/router';
import {TitleService} from './service/title.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showSideMenu = true;
  menuData: MenuInterface[] = [
    {id: 'welcome', name: 'Welcome'},
    {id: 'observable', name: 'Observable', subMenu: []},
    {id: 'subscription', name: 'Subscription', subMenu: []},
    {id: 'subject', name: 'Subject', subMenu: []},
    {id: 'scheduler', name: 'Scheduler', subMenu: []},
    {
      id: 'operators', name: 'Operators', subMenu: [
        {id: 'piping', name: 'Piping'},
        {id: 'higherOrderObservables', name: 'Higher-order Observables'},
        {id: 'marbleDiagrams', name: 'Marble diagrams'},
        {
          id: 'creationOperators', name: 'Creation Operators', subMenu: [
            {id: 'ajax', name: 'ajax'},
            {id: 'bindCallback', name: 'bindCallback'},
            {id: 'bindNodeCallback', name: 'bindNodeCallback'},
            {id: 'defer', name: 'defer'},
            {id: 'empty', name: 'empty'},
            {id: 'from', name: 'from'},
            {id: 'fromEvent', name: 'fromEvent'},
            {id: 'fromEventPattern', name: 'fromEventPattern'},
            {id: 'generate', name: 'generate'},
            {id: 'interval', name: 'interval'},
            {id: 'of', name: 'of'},
            {id: 'range', name: 'range'},
            {id: 'throwError', name: 'throwError'},
            {id: 'timer', name: 'timer'},
            {id: 'iif', name: 'iif'},
          ]
        },
        {
          id: 'joinCreationOperators', name: 'Join Creation Operators', subMenu: [
            {id: 'combineLatest', name: 'combineLatest'},
            {id: 'concat', name: 'concat'},
            {id: 'forkJoin', name: 'forkJoin'},
            {id: 'merge', name: 'merge'},
            {id: 'race', name: 'race'},
            {id: 'zip', name: 'zip'},
          ]
        },
        {
          id: 'filteringOperators', name: 'Filtering Operators', subMenu: [
            {id: 'audit', name: 'audit'},
            {id: 'auditTime', name: 'auditTime'},
            {id: 'debounce', name: 'debounce'},
            {id: 'debounceTime', name: 'debounceTime'},
            {id: 'distinct', name: 'distinct'},
            {id: 'distinctKey', name: 'distinctKey'},
            {id: 'distinctUntilChanged', name: 'distinctUntilChanged'},
            {id: 'distinctUntilKeyChanged', name: 'distinctUntilKeyChanged'},
            {id: 'elementAt', name: 'elementAt'},
            {id: 'filter', name: 'filter'},
            {id: 'first', name: 'first'},
            {id: 'ignoreElements', name: 'ignoreElements'},
            {id: 'last', name: 'last'},
            {id: 'sample', name: 'sample'},
            {id: 'sampleTime', name: 'sampleTime'},
            {id: 'single', name: 'single'},
            {id: 'skip', name: 'skip'},
            {id: 'skipLast', name: 'skipLast'},
            {id: 'skipUntil', name: 'skipUntil'},
            {id: 'skipWhile', name: 'skipWhile'},
            {id: 'take', name: 'take'},
            {id: 'takeLast', name: 'takeLast'},
            {id: 'takeUntil', name: 'takeUntil'},
            {id: 'takeWhile', name: 'takeWhile'},
            {id: 'throttle', name: 'throttle'},
            {id: 'throttleTime', name: 'throttleTime'},
          ]
        },
        {
          id: 'joinOperators', name: 'Join Operators', subMenu: [
            {id: 'combineAll', name: 'combineAll'},
            {id: 'concatAll', name: 'concatAll'},
            {id: 'exhaust', name: 'exhaust'},
            {id: 'mergeAll', name: 'mergeAll'},
            {id: 'startWith', name: 'startWith'},
            {id: 'withLatestFrom', name: 'withLatestFrom'},
          ]
        },
        {
          id: 'multicastingOperators', name: 'Multicasting Operators', subMenu: [
            {id: 'multicast', name: 'multicast'},
            {id: 'publish', name: 'publish'},
            {id: 'publishBehavior', name: 'publishBehavior'},
            {id: 'publishLast', name: 'publishLast'},
            {id: 'publishReplay', name: 'publishReplay'},
            {id: 'share', name: 'share'},
          ]
        },
        {
          id: 'error HandlingOperators', name: 'Error Handling Operators', subMenu: [
            {id: 'catchError', name: 'catchError'},
            {id: 'retry', name: 'retry'},
            {id: 'retryWhen', name: 'retryWhen'},
          ]
        },
        {
          id: 'utilityOperators', name: 'Utility Operators', subMenu: [
            {id: 'tap', name: 'tap'},
            {id: 'delay', name: 'delay'},
            {id: 'delayWhen', name: 'delayWhen'},
            {id: 'dematerialize', name: 'dematerialize'},
            {id: 'materialize', name: 'materialize'},
            {id: 'observeOn', name: 'observeOn'},
            {id: 'subscribeOn', name: 'subscribeOn'},
            {id: 'timeInterval', name: 'timeInterval'},
            {id: 'timestamp', name: 'timestamp'},
            {id: 'timeout', name: 'timeout'},
            {id: 'timeoutWith', name: 'timeoutWith'},
            {id: 'toArray', name: 'toArray'},
          ]
        },
        {
          id: 'conditionalSndBooleanOperators', name: 'Conditional and Boolean Operators', subMenu: [
            {id: 'defaultIfEmpty', name: 'defaultIfEmpty'},
            {id: 'every', name: 'every'},
            {id: 'find', name: 'find'},
            {id: 'findIndex', name: 'findIndex'},
            {id: 'isEmpty', name: 'isEmpty'},
          ]
        },
        {
          id: 'mathematicalAndAggregateOperators', name: 'Mathematical and Aggregate Operators', subMenu: [
            {id: 'count', name: 'count'},
            {id: 'max', name: 'max'},
            {id: 'min', name: 'min'},
            {id: 'reduce', name: 'reduce'},
          ]
        },
        {
          id: 'transformationOperators', name: 'Transformation Operators', subMenu: [
            {id: 'buffer', name: '01. buffer'},
            {id: 'buffer-count', name: '02. bufferCount'},
            {id: 'buffer-time', name: '03. bufferTime'},
            {id: 'buffer-toggle', name: '04. bufferToggle'},
            {id: 'buffer-when', name: '05. bufferWhen'},
            {id: 'concat-map', name: '06. concatMap'},
            {id: 'concat-map-to', name: '07. concatMapTo'},
            {id: 'exhaust', name: '08. exhaust'},
            {id: 'exhaust-map', name: '09. exhaustMap'},
            {id: 'expand', name: '10. expand'},
            {id: 'group-by', name: '11. groupBy'},
            {id: 'map', name: '12. map'},
            {id: 'map-to', name: '13. mapTo'},
            {id: 'merge-map', name: '14. mergeMap'},
            {id: 'merge-map-to', name: '15. mergeMapTo'},
            {id: 'merge-scan', name: '16. mergeScan'},
            {id: 'pairwise', name: '17. pairwise'},
            {id: 'partition', name: '18. partition'},
            {id: 'pluck', name: '19. pluck'},
            {id: 'scan', name: '20. scan'},
            {id: 'switch-map', name: '21. switchMap'},
            {id: 'switch-map-to', name: '22. switchMapTo'},
            {id: 'window', name: '23. window'},
            {id: 'window-count', name: '24. windowCount'},
            {id: 'window-time', name: '25. windowTime'},
            {id: 'window-toggle', name: '26. windowToggle'},
            {id: 'window-when', name: '27. windowWhen'},
          ]
        },
      ]
    },

  ];
  activeMenu = 'welcome';

  constructor(
    private router: Router,
    private titleService: TitleService
  ) {
  }

  ngOnInit(): void {
    this.titleService.init();
  }

  changeActivePage(url: string) {
    // alert($event);
    this.router.navigate([url]);
  }
}
