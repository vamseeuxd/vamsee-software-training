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
    {id: 'html', name: 'HTML', subMenu: []},
    {id: 'css', name: 'CSS', subMenu: []},
    {id: 'javaScript', name: 'Java Script', subMenu: []},
    {id: 'typeScript', name: 'Type Script', subMenu: []},
    {
      id: 'rxjs', name: 'RXJS', subMenu: [
        {id: 'rxjs-welcome', name: 'Welcome'},
        {id: 'rxjs-observable', name: 'Observable', subMenu: []},
        {id: 'rxjs-subscription', name: 'Subscription', subMenu: []},
        {id: 'rxjs-subject', name: 'Subject', subMenu: []},
        {id: 'rxjs-scheduler', name: 'Scheduler', subMenu: []},
        {
          id: 'rxjs-operators', name: 'Operators', subMenu: [
            {id: 'rxjs-piping', name: 'Piping'},
            {id: 'rxjs-higherOrderObservables', name: 'Higher-order Observables'},
            {id: 'rxjs-marbleDiagrams', name: 'Marble diagrams'},
            {
              id: 'rxjs-creationOperators', name: 'Creation Operators', subMenu: [
                {id: 'rxjs-ajax', name: 'ajax'},
                {id: 'rxjs-bindCallback', name: 'bindCallback'},
                {id: 'rxjs-bindNodeCallback', name: 'bindNodeCallback'},
                {id: 'rxjs-defer', name: 'defer'},
                {id: 'rxjs-empty', name: 'empty'},
                {id: 'rxjs-from', name: 'from'},
                {id: 'rxjs-fromEvent', name: 'fromEvent'},
                {id: 'rxjs-fromEventPattern', name: 'fromEventPattern'},
                {id: 'rxjs-generate', name: 'generate'},
                {id: 'rxjs-interval', name: 'interval'},
                {id: 'rxjs-of', name: 'of'},
                {id: 'rxjs-range', name: 'range'},
                {id: 'rxjs-throwError', name: 'throwError'},
                {id: 'rxjs-timer', name: 'timer'},
                {id: 'rxjs-iif', name: 'iif'},
              ]
            },
            {
              id: 'rxjs-joinCreationOperators', name: 'Join Creation Operators', subMenu: [
                {id: 'rxjs-combineLatest', name: 'combineLatest'},
                {id: 'rxjs-concat', name: 'concat'},
                {id: 'rxjs-forkJoin', name: 'forkJoin'},
                {id: 'rxjs-merge', name: 'merge'},
                {id: 'rxjs-race', name: 'race'},
                {id: 'rxjs-zip', name: 'zip'},
              ]
            },
            {
              id: 'rxjs-filteringOperators', name: 'Filtering Operators', subMenu: [
                {id: 'rxjs-audit', name: 'audit'},
                {id: 'rxjs-auditTime', name: 'auditTime'},
                {id: 'rxjs-debounce', name: 'debounce'},
                {id: 'rxjs-debounceTime', name: 'debounceTime'},
                {id: 'rxjs-distinct', name: 'distinct'},
                {id: 'rxjs-distinctKey', name: 'distinctKey'},
                {id: 'rxjs-distinctUntilChanged', name: 'distinctUntilChanged'},
                {id: 'rxjs-distinctUntilKeyChanged', name: 'distinctUntilKeyChanged'},
                {id: 'rxjs-elementAt', name: 'elementAt'},
                {id: 'rxjs-filter', name: 'filter'},
                {id: 'rxjs-first', name: 'first'},
                {id: 'rxjs-ignoreElements', name: 'ignoreElements'},
                {id: 'rxjs-last', name: 'last'},
                {id: 'rxjs-sample', name: 'sample'},
                {id: 'rxjs-sampleTime', name: 'sampleTime'},
                {id: 'rxjs-single', name: 'single'},
                {id: 'rxjs-skip', name: 'skip'},
                {id: 'rxjs-skipLast', name: 'skipLast'},
                {id: 'rxjs-skipUntil', name: 'skipUntil'},
                {id: 'rxjs-skipWhile', name: 'skipWhile'},
                {id: 'rxjs-take', name: 'take'},
                {id: 'rxjs-takeLast', name: 'takeLast'},
                {id: 'rxjs-takeUntil', name: 'takeUntil'},
                {id: 'rxjs-takeWhile', name: 'takeWhile'},
                {id: 'rxjs-throttle', name: 'throttle'},
                {id: 'rxjs-throttleTime', name: 'throttleTime'},
              ]
            },
            {
              id: 'rxjs-joinOperators', name: 'Join Operators', subMenu: [
                {id: 'rxjs-combineAll', name: 'combineAll'},
                {id: 'rxjs-concatAll', name: 'concatAll'},
                {id: 'rxjs-exhaust', name: 'exhaust'},
                {id: 'rxjs-mergeAll', name: 'mergeAll'},
                {id: 'rxjs-startWith', name: 'startWith'},
                {id: 'rxjs-withLatestFrom', name: 'withLatestFrom'},
              ]
            },
            {
              id: 'rxjs-multicastingOperators', name: 'Multicasting Operators', subMenu: [
                {id: 'rxjs-multicast', name: 'multicast'},
                {id: 'rxjs-publish', name: 'publish'},
                {id: 'rxjs-publishBehavior', name: 'publishBehavior'},
                {id: 'rxjs-publishLast', name: 'publishLast'},
                {id: 'rxjs-publishReplay', name: 'publishReplay'},
                {id: 'rxjs-share', name: 'share'},
              ]
            },
            {
              id: 'rxjs-errorHandlingOperators', name: 'Error Handling Operators', subMenu: [
                {id: 'rxjs-catchError', name: 'catchError'},
                {id: 'rxjs-retry', name: 'retry'},
                {id: 'rxjs-retryWhen', name: 'retryWhen'},
              ]
            },
            {
              id: 'rxjs-utilityOperators', name: 'Utility Operators', subMenu: [
                {id: 'rxjs-tap', name: 'tap'},
                {id: 'rxjs-delay', name: 'delay'},
                {id: 'rxjs-delayWhen', name: 'delayWhen'},
                {id: 'rxjs-dematerialize', name: 'dematerialize'},
                {id: 'rxjs-materialize', name: 'materialize'},
                {id: 'rxjs-observeOn', name: 'observeOn'},
                {id: 'rxjs-subscribeOn', name: 'subscribeOn'},
                {id: 'rxjs-timeInterval', name: 'timeInterval'},
                {id: 'rxjs-timestamp', name: 'timestamp'},
                {id: 'rxjs-timeout', name: 'timeout'},
                {id: 'rxjs-timeoutWith', name: 'timeoutWith'},
                {id: 'rxjs-toArray', name: 'toArray'},
              ]
            },
            {
              id: 'rxjs-conditionalSndBooleanOperators', name: 'Conditional and Boolean Operators', subMenu: [
                {id: 'rxjs-defaultIfEmpty', name: 'defaultIfEmpty'},
                {id: 'rxjs-every', name: 'every'},
                {id: 'rxjs-find', name: 'find'},
                {id: 'rxjs-findIndex', name: 'findIndex'},
                {id: 'rxjs-isEmpty', name: 'isEmpty'},
              ]
            },
            {
              id: 'rxjs-mathematicalAndAggregateOperators', name: 'Mathematical and Aggregate Operators', subMenu: [
                {id: 'rxjs-count', name: 'count'},
                {id: 'rxjs-max', name: 'max'},
                {id: 'rxjs-min', name: 'min'},
                {id: 'rxjs-reduce', name: 'reduce'},
              ]
            },
            {
              id: 'rxjs-transformationOperators', name: 'Transformation Operators', subMenu: [
                {id: 'rxjs-buffer', name: '01. buffer'},
                {id: 'rxjs-buffer-count', name: '02. bufferCount'},
                {id: 'rxjs-buffer-time', name: '03. bufferTime'},
                {id: 'rxjs-buffer-toggle', name: '04. bufferToggle'},
                {id: 'rxjs-buffer-when', name: '05. bufferWhen'},
                {id: 'rxjs-concat-map', name: '06. concatMap'},
                {id: 'rxjs-concat-map-to', name: '07. concatMapTo'},
                {id: 'rxjs-exhaust', name: '08. exhaust'},
                {id: 'rxjs-exhaust-map', name: '09. exhaustMap'},
                {id: 'rxjs-expand', name: '10. expand'},
                {id: 'rxjs-group-by', name: '11. groupBy'},
                {id: 'rxjs-map', name: '12. map'},
                {id: 'rxjs-map-to', name: '13. mapTo'},
                {id: 'rxjs-merge-map', name: '14. mergeMap'},
                {id: 'rxjs-merge-map-to', name: '15. mergeMapTo'},
                {id: 'rxjs-merge-scan', name: '16. mergeScan'},
                {id: 'rxjs-pairwise', name: '17. pairwise'},
                {id: 'rxjs-partition', name: '18. partition'},
                {id: 'rxjs-pluck', name: '19. pluck'},
                {id: 'rxjs-scan', name: '20. scan'},
                {id: 'rxjs-switch-map', name: '21. switchMap'},
                {id: 'rxjs-switch-map-to', name: '22. switchMapTo'},
                {id: 'rxjs-window', name: '23. window'},
                {id: 'rxjs-window-count', name: '24. windowCount'},
                {id: 'rxjs-window-time', name: '25. windowTime'},
                {id: 'rxjs-window-toggle', name: '26. windowToggle'},
                {id: 'rxjs-window-when', name: '27. windowWhen'},
              ]
            },
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
