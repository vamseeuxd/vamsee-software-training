import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from './pages/rxjs/welcome/welcome.component';
import {BufferComponent} from './pages/rxjs/buffer/buffer.component';
import {BufferCountComponent} from './pages/rxjs/buffer-count/buffer-count.component';
import {BufferTimeComponent} from './pages/rxjs/buffer-time/buffer-time.component';
import {BufferToggleComponent} from './pages/rxjs/buffer-toggle/buffer-toggle.component';
import {BufferWhenComponent} from './pages/rxjs/buffer-when/buffer-when.component';
import {ConcatMapComponent} from './pages/rxjs/concat-map/concat-map.component';
import {ConcatMapToComponent} from './pages/rxjs/concat-map-to/concat-map-to.component';
import {ExhaustComponent} from './pages/rxjs/exhaust/exhaust.component';
import {ExhaustMapComponent} from './pages/rxjs/exhaust-map/exhaust-map.component';
import {ExpandComponent} from './pages/rxjs/expand/expand.component';
import {GroupByComponent} from './pages/rxjs/group-by/group-by.component';
import {MapComponent} from './pages/rxjs/map/map.component';
import {MapToComponent} from './pages/rxjs/map-to/map-to.component';
import {MergeMapComponent} from './pages/rxjs/merge-map/merge-map.component';
import {MergeMapToComponent} from './pages/rxjs/merge-map-to/merge-map-to.component';
import {MergeScanComponent} from './pages/rxjs/merge-scan/merge-scan.component';
import {PairwiseComponent} from './pages/rxjs/pairwise/pairwise.component';
import {PartitionComponent} from './pages/rxjs/partition/partition.component';
import {PluckComponent} from './pages/rxjs/pluck/pluck.component';
import {ScanComponent} from './pages/rxjs/scan/scan.component';
import {SwitchMapComponent} from './pages/rxjs/switch-map/switch-map.component';
import {SwitchMapToComponent} from './pages/rxjs/switch-map-to/switch-map-to.component';
import {WindowComponent} from './pages/rxjs/window/window.component';
import {WindowCountComponent} from './pages/rxjs/window-count/window-count.component';
import {WindowTimeComponent} from './pages/rxjs/window-time/window-time.component';
import {WindowToggleComponent} from './pages/rxjs/window-toggle/window-toggle.component';
import {WindowWhenComponent} from './pages/rxjs/window-when/window-when.component';
import {ObservableComponent} from './pages/rxjs/observable/observable.component';
import {SubscriptionComponent} from './pages/rxjs/subscription/subscription.component';
import {SubjectComponent} from './pages/rxjs/subject/subject.component';
import {SchedulerComponent} from './pages/rxjs/scheduler/scheduler.component';
import {PipingComponent} from './pages/rxjs/piping/piping.component';
import {HigherOrderObservablesComponent} from './pages/rxjs/higher-order-observables/higher-order-observables.component';
import {MarbleDiagramsComponent} from './pages/rxjs/marble-diagrams/marble-diagrams.component';
import {AjaxComponent} from './pages/rxjs/ajax/ajax.component';
import {BindCallbackComponent} from './pages/rxjs/bind-callback/bind-callback.component';
import {BindNodeCallbackComponent} from './pages/rxjs/bind-node-callback/bind-node-callback.component';
import {DeferComponent} from './pages/rxjs/defer/defer.component';
import {EmptyComponent} from './pages/rxjs/empty/empty.component';
import {FromComponent} from './pages/rxjs/from/from.component';
import {FromEventComponent} from './pages/rxjs/from-event/from-event.component';
import {FromEventPatternComponent} from './pages/rxjs/from-event-pattern/from-event-pattern.component';
import {GenerateComponent} from './pages/rxjs/generate/generate.component';
import {IntervalComponent} from './pages/rxjs/interval/interval.component';
import {OfComponent} from './pages/rxjs/of/of.component';
import {RangeComponent} from './pages/rxjs/range/range.component';
import {ThrowErrorComponent} from './pages/rxjs/throw-error/throw-error.component';
import {TimerComponent} from './pages/rxjs/timer/timer.component';
import {IifComponent} from './pages/rxjs/iif/iif.component';
import {CombineLatestComponent} from './pages/rxjs/combine-latest/combine-latest.component';
import {ConcatComponent} from './pages/rxjs/concat/concat.component';
import {ForkJoinComponent} from './pages/rxjs/fork-join/fork-join.component';
import {MergeComponent} from './pages/rxjs/merge/merge.component';
import {RaceComponent} from './pages/rxjs/race/race.component';
import {ZipComponent} from './pages/rxjs/zip/zip.component';
import {AuditComponent} from './pages/rxjs/audit/audit.component';
import {AuditTimeComponent} from './pages/rxjs/audit-time/audit-time.component';
import {DebounceComponent} from './pages/rxjs/debounce/debounce.component';
import {DebounceTimeComponent} from './pages/rxjs/debounce-time/debounce-time.component';
import {DistinctComponent} from './pages/rxjs/distinct/distinct.component';
import {DistinctKeyComponent} from './pages/rxjs/distinct-key/distinct-key.component';
import {DistinctUntilChangedComponent} from './pages/rxjs/distinct-until-changed/distinct-until-changed.component';
import {DistinctUntilKeyChangedComponent} from './pages/rxjs/distinct-until-key-changed/distinct-until-key-changed.component';
import {ElementAtComponent} from './pages/rxjs/element-at/element-at.component';
import {FilterComponent} from './pages/rxjs/filter/filter.component';
import {FirstComponent} from './pages/rxjs/first/first.component';
import {IgnoreElementsComponent} from './pages/rxjs/ignore-elements/ignore-elements.component';
import {LastComponent} from './pages/rxjs/last/last.component';
import {SampleComponent} from './pages/rxjs/sample/sample.component';
import {SampleTimeComponent} from './pages/rxjs/sample-time/sample-time.component';
import {SingleComponent} from './pages/rxjs/single/single.component';
import {SkipComponent} from './pages/rxjs/skip/skip.component';
import {SkipLastComponent} from './pages/rxjs/skip-last/skip-last.component';
import {SkipUntilComponent} from './pages/rxjs/skip-until/skip-until.component';
import {SkipWhileComponent} from './pages/rxjs/skip-while/skip-while.component';
import {TakeComponent} from './pages/rxjs/take/take.component';
import {TakeLastComponent} from './pages/rxjs/take-last/take-last.component';
import {TakeUntilComponent} from './pages/rxjs/take-until/take-until.component';
import {TakeWhileComponent} from './pages/rxjs/take-while/take-while.component';
import {ThrottleComponent} from './pages/rxjs/throttle/throttle.component';
import {ThrottleTimeComponent} from './pages/rxjs/throttle-time/throttle-time.component';
import {CombineAllComponent} from './pages/rxjs/combine-all/combine-all.component';
import {ConcatAllComponent} from './pages/rxjs/concat-all/concat-all.component';
import {MergeAllComponent} from './pages/rxjs/merge-all/merge-all.component';
import {StartWithComponent} from './pages/rxjs/start-with/start-with.component';
import {WithLatestFromComponent} from './pages/rxjs/with-latest-from/with-latest-from.component';
import {MulticastComponent} from './pages/rxjs/multicast/multicast.component';
import {PublishComponent} from './pages/rxjs/publish/publish.component';
import {PublishBehaviorComponent} from './pages/rxjs/publish-behavior/publish-behavior.component';
import {PublishLastComponent} from './pages/rxjs/publish-last/publish-last.component';
import {PublishReplayComponent} from './pages/rxjs/publish-replay/publish-replay.component';
import {ShareComponent} from './pages/rxjs/share/share.component';
import {CatchErrorComponent} from './pages/rxjs/catch-error/catch-error.component';
import {RetryComponent} from './pages/rxjs/retry/retry.component';
import {RetryWhenComponent} from './pages/rxjs/retry-when/retry-when.component';
import {TapComponent} from './pages/rxjs/tap/tap.component';
import {DelayComponent} from './pages/rxjs/delay/delay.component';
import {DelayWhenComponent} from './pages/rxjs/delay-when/delay-when.component';
import {DematerializeComponent} from './pages/rxjs/dematerialize/dematerialize.component';
import {MaterializeComponent} from './pages/rxjs/materialize/materialize.component';
import {ObserveOnComponent} from './pages/rxjs/observe-on/observe-on.component';
import {SubscribeOnComponent} from './pages/rxjs/subscribe-on/subscribe-on.component';
import {TimeIntervalComponent} from './pages/rxjs/time-interval/time-interval.component';
import {TimestampComponent} from './pages/rxjs/timestamp/timestamp.component';
import {TimeoutComponent} from './pages/rxjs/timeout/timeout.component';
import {TimeoutWithComponent} from './pages/rxjs/timeout-with/timeout-with.component';
import {ToArrayComponent} from './pages/rxjs/to-array/to-array.component';
import {DefaultIfEmptyComponent} from './pages/rxjs/default-if-empty/default-if-empty.component';
import {EveryComponent} from './pages/rxjs/every/every.component';
import {FindComponent} from './pages/rxjs/find/find.component';
import {FindIndexComponent} from './pages/rxjs/find-index/find-index.component';
import {IsEmptyComponent} from './pages/rxjs/is-empty/is-empty.component';
import {CountComponent} from './pages/rxjs/count/count.component';
import {MaxComponent} from './pages/rxjs/max/max.component';
import {MinComponent} from './pages/rxjs/min/min.component';
import {ReduceComponent} from './pages/rxjs/reduce/reduce.component';


const routes: Routes = [
  {data: {title: 'RXJS / Welcome'}, path: 'rxjs-welcome', component: WelcomeComponent},
  /*    -------------------------------   Transformation Operators    -------------------------------   */
  {data: {title: 'RXJS / Transformation Operators / buffer'}, path: 'rxjs-buffer', component: BufferComponent},
  {data: {title: 'RXJS / Transformation Operators / bufferCount'}, path: 'rxjs-buffer-count', component: BufferCountComponent},
  {data: {title: 'RXJS / Transformation Operators / bufferTime'}, path: 'rxjs-buffer-time', component: BufferTimeComponent},
  {data: {title: 'RXJS / Transformation Operators / bufferToggle'}, path: 'rxjs-buffer-toggle', component: BufferToggleComponent},
  {data: {title: 'RXJS / Transformation Operators / bufferWhen'}, path: 'rxjs-buffer-when', component: BufferWhenComponent},
  {data: {title: 'RXJS / Transformation Operators / concatMap'}, path: 'rxjs-concat-map', component: ConcatMapComponent},
  {data: {title: 'RXJS / Transformation Operators / concatMapTo'}, path: 'rxjs-concat-map-to', component: ConcatMapToComponent},
  {data: {title: 'RXJS / Transformation Operators / exhaust'}, path: 'rxjs-exhaust', component: ExhaustComponent},
  {data: {title: 'RXJS / Transformation Operators / exhaustMap'}, path: 'rxjs-exhaust-map', component: ExhaustMapComponent},
  {data: {title: 'RXJS / Transformation Operators / expand'}, path: 'rxjs-expand', component: ExpandComponent},
  {data: {title: 'RXJS / Transformation Operators / groupBy'}, path: 'rxjs-group-by', component: GroupByComponent},
  {data: {title: 'RXJS / Transformation Operators / map'}, path: 'rxjs-map', component: MapComponent},
  {data: {title: 'RXJS / Transformation Operators / mapTo'}, path: 'rxjs-map-to', component: MapToComponent},
  {data: {title: 'RXJS / Transformation Operators / mergeMap'}, path: 'rxjs-merge-map', component: MergeMapComponent},
  {data: {title: 'RXJS / Transformation Operators / mergeMapTo'}, path: 'rxjs-merge-map-to', component: MergeMapToComponent},
  {data: {title: 'RXJS / Transformation Operators / mergeScan'}, path: 'rxjs-merge-scan', component: MergeScanComponent},
  {data: {title: 'RXJS / Transformation Operators / pairwise'}, path: 'rxjs-pairwise', component: PairwiseComponent},
  {data: {title: 'RXJS / Transformation Operators / partition'}, path: 'rxjs-partition', component: PartitionComponent},
  {data: {title: 'RXJS / Transformation Operators / pluck'}, path: 'rxjs-pluck', component: PluckComponent},
  {data: {title: 'RXJS / Transformation Operators / scan'}, path: 'rxjs-scan', component: ScanComponent},
  {data: {title: 'RXJS / Transformation Operators / switchMap'}, path: 'rxjs-switch-map', component: SwitchMapComponent},
  {data: {title: 'RXJS / Transformation Operators / switchMapTo'}, path: 'rxjs-switch-map-to', component: SwitchMapToComponent},
  {data: {title: 'RXJS / Transformation Operators / window'}, path: 'rxjs-window', component: WindowComponent},
  {data: {title: 'RXJS / Transformation Operators / windowCount'}, path: 'rxjs-window-count', component: WindowCountComponent},
  {data: {title: 'RXJS / Transformation Operators / windowTime'}, path: 'rxjs-window-time', component: WindowTimeComponent},
  {data: {title: 'RXJS / Transformation Operators / windowToggle'}, path: 'rxjs-window-toggle', component: WindowToggleComponent},
  {data: {title: 'RXJS / Transformation Operators / windowWhen'}, path: 'rxjs-window-when', component: WindowWhenComponent},
  /*    -------------------------------   Transformation Operators    -------------------------------   */

  {data: {title: 'RXJS / Observable'}, path: 'rxjs-observable', component: ObservableComponent},
  {data: {title: 'RXJS / Subscription'}, path: 'rxjs-subscription', component: SubscriptionComponent},
  {data: {title: 'RXJS / Subject'}, path: 'rxjs-subject', component: SubjectComponent},
  {data: {title: 'RXJS / Scheduler'}, path: 'rxjs-scheduler', component: SchedulerComponent},
  {data: {title: 'RXJS / Piping'}, path: 'rxjs-piping', component: PipingComponent},
  {data: {title: 'RXJS / Higher Order Observables'}, path: 'rxjs-higherOrderObservables', component: HigherOrderObservablesComponent},
  {data: {title: 'RXJS / Marble Diagrams'}, path: 'rxjs-marbleDiagrams', component: MarbleDiagramsComponent},
  {data: {title: 'RXJS / ajax'}, path: 'rxjs-ajax', component: AjaxComponent},
  {data: {title: 'RXJS / bindCallback'}, path: 'rxjs-bindCallback', component: BindCallbackComponent},
  {data: {title: 'RXJS / bindNodeCallback'}, path: 'rxjs-bindNodeCallback', component: BindNodeCallbackComponent},
  {data: {title: 'RXJS / defer'}, path: 'rxjs-defer', component: DeferComponent},
  {data: {title: 'RXJS / empty'}, path: 'rxjs-empty', component: EmptyComponent},
  {data: {title: 'RXJS / from'}, path: 'rxjs-from', component: FromComponent},
  {data: {title: 'RXJS / fromEvent'}, path: 'rxjs-fromEvent', component: FromEventComponent},
  {data: {title: 'RXJS / fromEventPattern'}, path: 'rxjs-fromEventPattern', component: FromEventPatternComponent},
  {data: {title: 'RXJS / generate'}, path: 'rxjs-generate', component: GenerateComponent},
  {data: {title: 'RXJS / interval'}, path: 'rxjs-interval', component: IntervalComponent},
  {data: {title: 'RXJS / of'}, path: 'rxjs-of', component: OfComponent},
  {data: {title: 'RXJS / range'}, path: 'rxjs-range', component: RangeComponent},
  {data: {title: 'RXJS / throwError'}, path: 'rxjs-throwError', component: ThrowErrorComponent},
  {data: {title: 'RXJS / timer'}, path: 'rxjs-timer', component: TimerComponent},
  {data: {title: 'RXJS / iif'}, path: 'rxjs-iif', component: IifComponent},
  /*Join Creation Operators*/
  {data: {title: 'RXJS / Join Creation Operators / combineLatest'}, path: 'rxjs-combineLatest', component: CombineLatestComponent},
  {data: {title: 'RXJS / Join Creation Operators / concat'}, path: 'rxjs-concat', component: ConcatComponent},
  {data: {title: 'RXJS / Join Creation Operators / forkJoin'}, path: 'rxjs-forkJoin', component: ForkJoinComponent},
  {data: {title: 'RXJS / Join Creation Operators / merge'}, path: 'rxjs-merge', component: MergeComponent},
  {data: {title: 'RXJS / Join Creation Operators / race'}, path: 'rxjs-race', component: RaceComponent},
  {data: {title: 'RXJS / Join Creation Operators / zip'}, path: 'rxjs-zip', component: ZipComponent},
  /*Join Creation Operators*/

  /*Filtering Operators*/
  {data: {title: 'RXJS / Filtering Operators / audit'}, path: 'rxjs-audit', component: AuditComponent},
  {data: {title: 'RXJS / Filtering Operators / auditTime'}, path: 'rxjs-auditTime', component: AuditTimeComponent},
  {data: {title: 'RXJS / Filtering Operators / debounce'}, path: 'rxjs-debounce', component: DebounceComponent},
  {data: {title: 'RXJS / Filtering Operators / debounceTime'}, path: 'rxjs-debounceTime', component: DebounceTimeComponent},
  {data: {title: 'RXJS / Filtering Operators / distinct'}, path: 'rxjs-distinct', component: DistinctComponent},
  {data: {title: 'RXJS / Filtering Operators / distinctKey'}, path: 'rxjs-distinctKey', component: DistinctKeyComponent},
  {
    data: {title: 'RXJS / Filtering Operators / distinctUntilChanged'},
    path: 'rxjs-distinctUntilChanged',
    component: DistinctUntilChangedComponent
  },
  {
    data: {title: 'RXJS / Filtering Operators / distinctUntilKeyChanged'},
    path: 'rxjs-distinctUntilKeyChanged',
    component: DistinctUntilKeyChangedComponent
  },
  {data: {title: 'RXJS / Filtering Operators / elementAt'}, path: 'rxjs-elementAt', component: ElementAtComponent},
  {data: {title: 'RXJS / Filtering Operators / filter'}, path: 'rxjs-filter', component: FilterComponent},
  {data: {title: 'RXJS / Filtering Operators / first'}, path: 'rxjs-first', component: FirstComponent},
  {data: {title: 'RXJS / Filtering Operators / ignoreElements'}, path: 'rxjs-ignoreElements', component: IgnoreElementsComponent},
  {data: {title: 'RXJS / Filtering Operators / last'}, path: 'rxjs-last', component: LastComponent},
  {data: {title: 'RXJS / Filtering Operators / sample'}, path: 'rxjs-sample', component: SampleComponent},
  {data: {title: 'RXJS / Filtering Operators / sampleTime'}, path: 'rxjs-sampleTime', component: SampleTimeComponent},
  {data: {title: 'RXJS / Filtering Operators / single'}, path: 'rxjs-single', component: SingleComponent},
  {data: {title: 'RXJS / Filtering Operators / skip'}, path: 'rxjs-skip', component: SkipComponent},
  {data: {title: 'RXJS / Filtering Operators / skipLast'}, path: 'rxjs-skipLast', component: SkipLastComponent},
  {data: {title: 'RXJS / Filtering Operators / skipUntil'}, path: 'rxjs-skipUntil', component: SkipUntilComponent},
  {data: {title: 'RXJS / Filtering Operators / skipWhile'}, path: 'rxjs-skipWhile', component: SkipWhileComponent},
  {data: {title: 'RXJS / Filtering Operators / take'}, path: 'rxjs-take', component: TakeComponent},
  {data: {title: 'RXJS / Filtering Operators / takeLast'}, path: 'rxjs-takeLast', component: TakeLastComponent},
  {data: {title: 'RXJS / Filtering Operators / takeUntil'}, path: 'rxjs-takeUntil', component: TakeUntilComponent},
  {data: {title: 'RXJS / Filtering Operators / takeWhile'}, path: 'rxjs-takeWhile', component: TakeWhileComponent},
  {data: {title: 'RXJS / Filtering Operators / throttle'}, path: 'rxjs-throttle', component: ThrottleComponent},
  {data: {title: 'RXJS / Filtering Operators / throttleTime'}, path: 'rxjs-throttleTime', component: ThrottleTimeComponent},
  /*Filtering Operators*/

  /*Join Operators*/
  {data: {title: 'RXJS / Join Operators / combineAll'}, path: 'rxjs-combineAll', component: CombineAllComponent},
  {data: {title: 'RXJS / Join Operators / concatAll'}, path: 'rxjs-concatAll', component: ConcatAllComponent},
  {data: {title: 'RXJS / Join Operators / exhaust'}, path: 'rxjs-exhaust', component: ExhaustComponent},
  {data: {title: 'RXJS / Join Operators / mergeAll'}, path: 'rxjs-mergeAll', component: MergeAllComponent},
  {data: {title: 'RXJS / Join Operators / startWith'}, path: 'rxjs-startWith', component: StartWithComponent},
  {data: {title: 'RXJS / Join Operators / withLatestFrom'}, path: 'rxjs-withLatestFrom', component: WithLatestFromComponent},
  /*Join Operators*/

  /*Multicasting Operators*/
  {data: {title: 'RXJS / Multicasting Operators / multicast'}, path: 'rxjs-multicast', component: MulticastComponent},
  {data: {title: 'RXJS / Multicasting Operators / publish'}, path: 'rxjs-publish', component: PublishComponent},
  {data: {title: 'RXJS / Multicasting Operators / publishBehavior'}, path: 'rxjs-publishBehavior', component: PublishBehaviorComponent},
  {data: {title: 'RXJS / Multicasting Operators / publishLast'}, path: 'rxjs-publishLast', component: PublishLastComponent},
  {data: {title: 'RXJS / Multicasting Operators / publishReplay'}, path: 'rxjs-publishReplay', component: PublishReplayComponent},
  {data: {title: 'RXJS / Multicasting Operators / share'}, path: 'rxjs-share', component: ShareComponent},
  /*Multicasting Operators*/

  /*Error Handling Operators*/
  {data: {title: 'RXJS / Error Handling Operators / catchError'}, path: 'rxjs-catchError', component: CatchErrorComponent},
  {data: {title: 'RXJS / Error Handling Operators / retry'}, path: 'rxjs-retry', component: RetryComponent},
  {data: {title: 'RXJS / Error Handling Operators / retryWhen'}, path: 'rxjs-retryWhen', component: RetryWhenComponent},
  /*Error Handling Operators*/

  /*Utility Operators*/
  {data: {title: 'RXJS / Utility Operators / tap'}, path: 'rxjs-tap', component: TapComponent},
  {data: {title: 'RXJS / Utility Operators / delay'}, path: 'rxjs-delay', component: DelayComponent},
  {data: {title: 'RXJS / Utility Operators / delayWhen'}, path: 'rxjs-delayWhen', component: DelayWhenComponent},
  {data: {title: 'RXJS / Utility Operators / dematerialize'}, path: 'rxjs-dematerialize', component: DematerializeComponent},
  {data: {title: 'RXJS / Utility Operators / materialize'}, path: 'rxjs-materialize', component: MaterializeComponent},
  {data: {title: 'RXJS / Utility Operators / observeOn'}, path: 'rxjs-observeOn', component: ObserveOnComponent},
  {data: {title: 'RXJS / Utility Operators / subscribeOn'}, path: 'rxjs-subscribeOn', component: SubscribeOnComponent},
  {data: {title: 'RXJS / Utility Operators / timeInterval'}, path: 'rxjs-timeInterval', component: TimeIntervalComponent},
  {data: {title: 'RXJS / Utility Operators / timestamp'}, path: 'rxjs-timestamp', component: TimestampComponent},
  {data: {title: 'RXJS / Utility Operators / timeout'}, path: 'rxjs-timeout', component: TimeoutComponent},
  {data: {title: 'RXJS / Utility Operators / timeoutWith'}, path: 'rxjs-timeoutWith', component: TimeoutWithComponent},
  {data: {title: 'RXJS / Utility Operators / toArray'}, path: 'rxjs-toArray', component: ToArrayComponent},
  /*Utility Operators*/

  /*Conditional and Boolean Operators*/
  {
    data: {title: 'RXJS / Conditional and Boolean Operators / defaultIfEmpty'},
    path: 'rxjs-defaultIfEmpty',
    component: DefaultIfEmptyComponent
  },
  {data: {title: 'RXJS / Conditional and Boolean Operators / every'}, path: 'rxjs-every', component: EveryComponent},
  {data: {title: 'RXJS / Conditional and Boolean Operators / find'}, path: 'rxjs-find', component: FindComponent},
  {data: {title: 'RXJS / Conditional and Boolean Operators / findIndex'}, path: 'rxjs-findIndex', component: FindIndexComponent},
  {data: {title: 'RXJS / Conditional and Boolean Operators / isEmpty'}, path: 'rxjs-isEmpty', component: IsEmptyComponent},
  /*Conditional and Boolean Operators*/

  /*Mathematical and Aggregate Operators*/
  {data: {title: 'RXJS / Mathematical and Aggregate Operators / count'}, path: 'rxjs-count', component: CountComponent},
  {data: {title: 'RXJS / Mathematical and Aggregate Operators / max'}, path: 'rxjs-max', component: MaxComponent},
  {data: {title: 'RXJS / Mathematical and Aggregate Operators / min'}, path: 'rxjs-min', component: MinComponent},
  {data: {title: 'RXJS / Mathematical and Aggregate Operators / reduce'}, path: 'rxjs-reduce', component: ReduceComponent},
  /*Mathematical and Aggregate Operators*/

  {path: '', redirectTo: 'rxjs-welcome', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingRoutingModule {
}
