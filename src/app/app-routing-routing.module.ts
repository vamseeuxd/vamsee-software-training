import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WelcomeComponent} from './pages/welcome/welcome.component';
import {BufferComponent} from './pages/buffer/buffer.component';
import {BufferCountComponent} from './pages/buffer-count/buffer-count.component';
import {BufferTimeComponent} from './pages/buffer-time/buffer-time.component';
import {BufferToggleComponent} from './pages/buffer-toggle/buffer-toggle.component';
import {BufferWhenComponent} from './pages/buffer-when/buffer-when.component';
import {ConcatMapComponent} from './pages/concat-map/concat-map.component';
import {ConcatMapToComponent} from './pages/concat-map-to/concat-map-to.component';
import {ExhaustComponent} from './pages/exhaust/exhaust.component';
import {ExhaustMapComponent} from './pages/exhaust-map/exhaust-map.component';
import {ExpandComponent} from './pages/expand/expand.component';
import {GroupByComponent} from './pages/group-by/group-by.component';
import {MapComponent} from './pages/map/map.component';
import {MapToComponent} from './pages/map-to/map-to.component';
import {MergeMapComponent} from './pages/merge-map/merge-map.component';
import {MergeMapToComponent} from './pages/merge-map-to/merge-map-to.component';
import {MergeScanComponent} from './pages/merge-scan/merge-scan.component';
import {PairwiseComponent} from './pages/pairwise/pairwise.component';
import {PartitionComponent} from './pages/partition/partition.component';
import {PluckComponent} from './pages/pluck/pluck.component';
import {ScanComponent} from './pages/scan/scan.component';
import {SwitchMapComponent} from './pages/switch-map/switch-map.component';
import {SwitchMapToComponent} from './pages/switch-map-to/switch-map-to.component';
import {WindowComponent} from './pages/window/window.component';
import {WindowCountComponent} from './pages/window-count/window-count.component';
import {WindowTimeComponent} from './pages/window-time/window-time.component';
import {WindowToggleComponent} from './pages/window-toggle/window-toggle.component';
import {WindowWhenComponent} from './pages/window-when/window-when.component';
import {ObservableComponent} from './pages/observable/observable.component';
import {SubscriptionComponent} from './pages/subscription/subscription.component';
import {SubjectComponent} from './pages/subject/subject.component';
import {SchedulerComponent} from './pages/scheduler/scheduler.component';
import {PipingComponent} from './pages/piping/piping.component';
import {HigherOrderObservablesComponent} from './pages/higher-order-observables/higher-order-observables.component';
import {MarbleDiagramsComponent} from './pages/marble-diagrams/marble-diagrams.component';
import {AjaxComponent} from './pages/ajax/ajax.component';
import {BindCallbackComponent} from './pages/bind-callback/bind-callback.component';
import {BindNodeCallbackComponent} from './pages/bind-node-callback/bind-node-callback.component';
import {DeferComponent} from './pages/defer/defer.component';
import {EmptyComponent} from './pages/empty/empty.component';
import {FromComponent} from './pages/from/from.component';
import {FromEventComponent} from './pages/from-event/from-event.component';
import {FromEventPatternComponent} from './pages/from-event-pattern/from-event-pattern.component';
import {GenerateComponent} from './pages/generate/generate.component';
import {IntervalComponent} from './pages/interval/interval.component';
import {OfComponent} from './pages/of/of.component';
import {RangeComponent} from './pages/range/range.component';
import {ThrowErrorComponent} from './pages/throw-error/throw-error.component';
import {TimerComponent} from './pages/timer/timer.component';
import {IifComponent} from './pages/iif/iif.component';
import {CombineLatestComponent} from './pages/combine-latest/combine-latest.component';
import {ConcatComponent} from './pages/concat/concat.component';
import {ForkJoinComponent} from './pages/fork-join/fork-join.component';
import {MergeComponent} from './pages/merge/merge.component';
import {RaceComponent} from './pages/race/race.component';
import {ZipComponent} from './pages/zip/zip.component';
import {AuditComponent} from './pages/audit/audit.component';
import {AuditTimeComponent} from './pages/audit-time/audit-time.component';
import {DebounceComponent} from './pages/debounce/debounce.component';
import {DebounceTimeComponent} from './pages/debounce-time/debounce-time.component';
import {DistinctComponent} from './pages/distinct/distinct.component';
import {DistinctKeyComponent} from './pages/distinct-key/distinct-key.component';
import {DistinctUntilChangedComponent} from './pages/distinct-until-changed/distinct-until-changed.component';
import {DistinctUntilKeyChangedComponent} from './pages/distinct-until-key-changed/distinct-until-key-changed.component';
import {ElementAtComponent} from './pages/element-at/element-at.component';
import {FilterComponent} from './pages/filter/filter.component';
import {FirstComponent} from './pages/first/first.component';
import {IgnoreElementsComponent} from './pages/ignore-elements/ignore-elements.component';
import {LastComponent} from './pages/last/last.component';
import {SampleComponent} from './pages/sample/sample.component';
import {SampleTimeComponent} from './pages/sample-time/sample-time.component';
import {SingleComponent} from './pages/single/single.component';
import {SkipComponent} from './pages/skip/skip.component';
import {SkipLastComponent} from './pages/skip-last/skip-last.component';
import {SkipUntilComponent} from './pages/skip-until/skip-until.component';
import {SkipWhileComponent} from './pages/skip-while/skip-while.component';
import {TakeComponent} from './pages/take/take.component';
import {TakeLastComponent} from './pages/take-last/take-last.component';
import {TakeUntilComponent} from './pages/take-until/take-until.component';
import {TakeWhileComponent} from './pages/take-while/take-while.component';
import {ThrottleComponent} from './pages/throttle/throttle.component';
import {ThrottleTimeComponent} from './pages/throttle-time/throttle-time.component';
import {CombineAllComponent} from './pages/combine-all/combine-all.component';
import {ConcatAllComponent} from './pages/concat-all/concat-all.component';
import {MergeAllComponent} from './pages/merge-all/merge-all.component';
import {StartWithComponent} from './pages/start-with/start-with.component';
import {WithLatestFromComponent} from './pages/with-latest-from/with-latest-from.component';
import {MulticastComponent} from './pages/multicast/multicast.component';
import {PublishComponent} from './pages/publish/publish.component';
import {PublishBehaviorComponent} from './pages/publish-behavior/publish-behavior.component';
import {PublishLastComponent} from './pages/publish-last/publish-last.component';
import {PublishReplayComponent} from './pages/publish-replay/publish-replay.component';
import {ShareComponent} from './pages/share/share.component';
import {CatchErrorComponent} from './pages/catch-error/catch-error.component';
import {RetryComponent} from './pages/retry/retry.component';
import {RetryWhenComponent} from './pages/retry-when/retry-when.component';
import {TapComponent} from './pages/tap/tap.component';
import {DelayComponent} from './pages/delay/delay.component';
import {DelayWhenComponent} from './pages/delay-when/delay-when.component';
import {DematerializeComponent} from './pages/dematerialize/dematerialize.component';
import {MaterializeComponent} from './pages/materialize/materialize.component';
import {ObserveOnComponent} from './pages/observe-on/observe-on.component';
import {SubscribeOnComponent} from './pages/subscribe-on/subscribe-on.component';
import {TimeIntervalComponent} from './pages/time-interval/time-interval.component';
import {TimestampComponent} from './pages/timestamp/timestamp.component';
import {TimeoutComponent} from './pages/timeout/timeout.component';
import {TimeoutWithComponent} from './pages/timeout-with/timeout-with.component';
import {ToArrayComponent} from './pages/to-array/to-array.component';
import {DefaultIfEmptyComponent} from './pages/default-if-empty/default-if-empty.component';
import {EveryComponent} from './pages/every/every.component';
import {FindComponent} from './pages/find/find.component';
import {FindIndexComponent} from './pages/find-index/find-index.component';
import {IsEmptyComponent} from './pages/is-empty/is-empty.component';
import {CountComponent} from './pages/count/count.component';
import {MaxComponent} from './pages/max/max.component';
import {MinComponent} from './pages/min/min.component';
import {ReduceComponent} from './pages/reduce/reduce.component';


const routes: Routes = [
  {data: {title: 'RXJS / Welcome'}, path: 'welcome', component: WelcomeComponent},
  /*    -------------------------------   Transformation Operators    -------------------------------   */
  {data: {title: 'RXJS / Transformation Operators / buffer'}, path: 'buffer', component: BufferComponent},
  {data: {title: 'RXJS / Transformation Operators / bufferCount'}, path: 'buffer-count', component: BufferCountComponent},
  {data: {title: 'RXJS / Transformation Operators / bufferTime'}, path: 'buffer-time', component: BufferTimeComponent},
  {data: {title: 'RXJS / Transformation Operators / bufferToggle'}, path: 'buffer-toggle', component: BufferToggleComponent},
  {data: {title: 'RXJS / Transformation Operators / bufferWhen'}, path: 'buffer-when', component: BufferWhenComponent},
  {data: {title: 'RXJS / Transformation Operators / concatMap'}, path: 'concat-map', component: ConcatMapComponent},
  {data: {title: 'RXJS / Transformation Operators / concatMapTo'}, path: 'concat-map-to', component: ConcatMapToComponent},
  {data: {title: 'RXJS / Transformation Operators / exhaust'}, path: 'exhaust', component: ExhaustComponent},
  {data: {title: 'RXJS / Transformation Operators / exhaustMap'}, path: 'exhaust-map', component: ExhaustMapComponent},
  {data: {title: 'RXJS / Transformation Operators / expand'}, path: 'expand', component: ExpandComponent},
  {data: {title: 'RXJS / Transformation Operators / groupBy'}, path: 'group-by', component: GroupByComponent},
  {data: {title: 'RXJS / Transformation Operators / map'}, path: 'map', component: MapComponent},
  {data: {title: 'RXJS / Transformation Operators / mapTo'}, path: 'map-to', component: MapToComponent},
  {data: {title: 'RXJS / Transformation Operators / mergeMap'}, path: 'merge-map', component: MergeMapComponent},
  {data: {title: 'RXJS / Transformation Operators / mergeMapTo'}, path: 'merge-map-to', component: MergeMapToComponent},
  {data: {title: 'RXJS / Transformation Operators / mergeScan'}, path: 'merge-scan', component: MergeScanComponent},
  {data: {title: 'RXJS / Transformation Operators / pairwise'}, path: 'pairwise', component: PairwiseComponent},
  {data: {title: 'RXJS / Transformation Operators / partition'}, path: 'partition', component: PartitionComponent},
  {data: {title: 'RXJS / Transformation Operators / pluck'}, path: 'pluck', component: PluckComponent},
  {data: {title: 'RXJS / Transformation Operators / scan'}, path: 'scan', component: ScanComponent},
  {data: {title: 'RXJS / Transformation Operators / switchMap'}, path: 'switch-map', component: SwitchMapComponent},
  {data: {title: 'RXJS / Transformation Operators / switchMapTo'}, path: 'switch-map-to', component: SwitchMapToComponent},
  {data: {title: 'RXJS / Transformation Operators / window'}, path: 'window', component: WindowComponent},
  {data: {title: 'RXJS / Transformation Operators / windowCount'}, path: 'window-count', component: WindowCountComponent},
  {data: {title: 'RXJS / Transformation Operators / windowTime'}, path: 'window-time', component: WindowTimeComponent},
  {data: {title: 'RXJS / Transformation Operators / windowToggle'}, path: 'window-toggle', component: WindowToggleComponent},
  {data: {title: 'RXJS / Transformation Operators / windowWhen'}, path: 'window-when', component: WindowWhenComponent},
  /*    -------------------------------   Transformation Operators    -------------------------------   */

  {data: {title: 'RXJS / Observable'}, path: 'observable', component: ObservableComponent},
  {data: {title: 'RXJS / Subscription'}, path: 'subscription', component: SubscriptionComponent},
  {data: {title: 'RXJS / Subject'}, path: 'subject', component: SubjectComponent},
  {data: {title: 'RXJS / Scheduler'}, path: 'scheduler', component: SchedulerComponent},
  {data: {title: 'RXJS / Piping'}, path: 'piping', component: PipingComponent},
  {data: {title: 'RXJS / Higher Order Observables'}, path: 'higherOrderObservables', component: HigherOrderObservablesComponent},
  {data: {title: 'RXJS / Marble Diagrams'}, path: 'marbleDiagrams', component: MarbleDiagramsComponent},
  {data: {title: 'RXJS / ajax'}, path: 'ajax', component: AjaxComponent},
  {data: {title: 'RXJS / bindCallback'}, path: 'bindCallback', component: BindCallbackComponent},
  {data: {title: 'RXJS / bindNodeCallback'}, path: 'bindNodeCallback', component: BindNodeCallbackComponent},
  {data: {title: 'RXJS / defer'}, path: 'defer', component: DeferComponent},
  {data: {title: 'RXJS / empty'}, path: 'empty', component: EmptyComponent},
  {data: {title: 'RXJS / from'}, path: 'from', component: FromComponent},
  {data: {title: 'RXJS / fromEvent'}, path: 'fromEvent', component: FromEventComponent},
  {data: {title: 'RXJS / fromEventPattern'}, path: 'fromEventPattern', component: FromEventPatternComponent},
  {data: {title: 'RXJS / generate'}, path: 'generate', component: GenerateComponent},
  {data: {title: 'RXJS / interval'}, path: 'interval', component: IntervalComponent},
  {data: {title: 'RXJS / of'}, path: 'of', component: OfComponent},
  {data: {title: 'RXJS / range'}, path: 'range', component: RangeComponent},
  {data: {title: 'RXJS / throwError'}, path: 'throwError', component: ThrowErrorComponent},
  {data: {title: 'RXJS / timer'}, path: 'timer', component: TimerComponent},
  {data: {title: 'RXJS / iif'}, path: 'iif', component: IifComponent},
  /*Join Creation Operators*/
  {data: {title: 'RXJS / Join Creation Operators / combineLatest'}, path: 'combineLatest', component: CombineLatestComponent},
  {data: {title: 'RXJS / Join Creation Operators / concat'}, path: 'concat', component: ConcatComponent},
  {data: {title: 'RXJS / Join Creation Operators / forkJoin'}, path: 'forkJoin', component: ForkJoinComponent},
  {data: {title: 'RXJS / Join Creation Operators / merge'}, path: 'merge', component: MergeComponent},
  {data: {title: 'RXJS / Join Creation Operators / race'}, path: 'race', component: RaceComponent},
  {data: {title: 'RXJS / Join Creation Operators / zip'}, path: 'zip', component: ZipComponent},
  /*Join Creation Operators*/

  /*Filtering Operators*/
  {data: {title: 'RXJS / Filtering Operators / audit'}, path: 'audit', component: AuditComponent},
  {data: {title: 'RXJS / Filtering Operators / auditTime'}, path: 'auditTime', component: AuditTimeComponent},
  {data: {title: 'RXJS / Filtering Operators / debounce'}, path: 'debounce', component: DebounceComponent},
  {data: {title: 'RXJS / Filtering Operators / debounceTime'}, path: 'debounceTime', component: DebounceTimeComponent},
  {data: {title: 'RXJS / Filtering Operators / distinct'}, path: 'distinct', component: DistinctComponent},
  {data: {title: 'RXJS / Filtering Operators / distinctKey'}, path: 'distinctKey', component: DistinctKeyComponent},
  {
    data: {title: 'RXJS / Filtering Operators / distinctUntilChanged'},
    path: 'distinctUntilChanged',
    component: DistinctUntilChangedComponent
  },
  {
    data: {title: 'RXJS / Filtering Operators / distinctUntilKeyChanged'},
    path: 'distinctUntilKeyChanged',
    component: DistinctUntilKeyChangedComponent
  },
  {data: {title: 'RXJS / Filtering Operators / elementAt'}, path: 'elementAt', component: ElementAtComponent},
  {data: {title: 'RXJS / Filtering Operators / filter'}, path: 'filter', component: FilterComponent},
  {data: {title: 'RXJS / Filtering Operators / first'}, path: 'first', component: FirstComponent},
  {data: {title: 'RXJS / Filtering Operators / ignoreElements'}, path: 'ignoreElements', component: IgnoreElementsComponent},
  {data: {title: 'RXJS / Filtering Operators / last'}, path: 'last', component: LastComponent},
  {data: {title: 'RXJS / Filtering Operators / sample'}, path: 'sample', component: SampleComponent},
  {data: {title: 'RXJS / Filtering Operators / sampleTime'}, path: 'sampleTime', component: SampleTimeComponent},
  {data: {title: 'RXJS / Filtering Operators / single'}, path: 'single', component: SingleComponent},
  {data: {title: 'RXJS / Filtering Operators / skip'}, path: 'skip', component: SkipComponent},
  {data: {title: 'RXJS / Filtering Operators / skipLast'}, path: 'skipLast', component: SkipLastComponent},
  {data: {title: 'RXJS / Filtering Operators / skipUntil'}, path: 'skipUntil', component: SkipUntilComponent},
  {data: {title: 'RXJS / Filtering Operators / skipWhile'}, path: 'skipWhile', component: SkipWhileComponent},
  {data: {title: 'RXJS / Filtering Operators / take'}, path: 'take', component: TakeComponent},
  {data: {title: 'RXJS / Filtering Operators / takeLast'}, path: 'takeLast', component: TakeLastComponent},
  {data: {title: 'RXJS / Filtering Operators / takeUntil'}, path: 'takeUntil', component: TakeUntilComponent},
  {data: {title: 'RXJS / Filtering Operators / takeWhile'}, path: 'takeWhile', component: TakeWhileComponent},
  {data: {title: 'RXJS / Filtering Operators / throttle'}, path: 'throttle', component: ThrottleComponent},
  {data: {title: 'RXJS / Filtering Operators / throttleTime'}, path: 'throttleTime', component: ThrottleTimeComponent},
  /*Filtering Operators*/

  /*Join Operators*/
  {data: {title: 'RXJS / Join Operators / combineAll'}, path: 'combineAll', component: CombineAllComponent},
  {data: {title: 'RXJS / Join Operators / concatAll'}, path: 'concatAll', component: ConcatAllComponent},
  {data: {title: 'RXJS / Join Operators / exhaust'}, path: 'exhaust', component: ExhaustComponent},
  {data: {title: 'RXJS / Join Operators / mergeAll'}, path: 'mergeAll', component: MergeAllComponent},
  {data: {title: 'RXJS / Join Operators / startWith'}, path: 'startWith', component: StartWithComponent},
  {data: {title: 'RXJS / Join Operators / withLatestFrom'}, path: 'withLatestFrom', component: WithLatestFromComponent},
  /*Join Operators*/

  /*Multicasting Operators*/
  {data: {title: 'RXJS / Multicasting Operators / multicast'}, path: 'multicast', component: MulticastComponent},
  {data: {title: 'RXJS / Multicasting Operators / publish'}, path: 'publish', component: PublishComponent},
  {data: {title: 'RXJS / Multicasting Operators / publishBehavior'}, path: 'publishBehavior', component: PublishBehaviorComponent},
  {data: {title: 'RXJS / Multicasting Operators / publishLast'}, path: 'publishLast', component: PublishLastComponent},
  {data: {title: 'RXJS / Multicasting Operators / publishReplay'}, path: 'publishReplay', component: PublishReplayComponent},
  {data: {title: 'RXJS / Multicasting Operators / share'}, path: 'share', component: ShareComponent},
  /*Multicasting Operators*/

  /*Error Handling Operators*/
  {data: {title: 'RXJS / Error Handling Operators / catchError'}, path: 'catchError', component: CatchErrorComponent},
  {data: {title: 'RXJS / Error Handling Operators / retry'}, path: 'retry', component: RetryComponent},
  {data: {title: 'RXJS / Error Handling Operators / retryWhen'}, path: 'retryWhen', component: RetryWhenComponent},
  /*Error Handling Operators*/

  /*Utility Operators*/
  {data: {title: 'RXJS / Utility Operators / tap'}, path: 'tap', component: TapComponent},
  {data: {title: 'RXJS / Utility Operators / delay'}, path: 'delay', component: DelayComponent},
  {data: {title: 'RXJS / Utility Operators / delayWhen'}, path: 'delayWhen', component: DelayWhenComponent},
  {data: {title: 'RXJS / Utility Operators / dematerialize'}, path: 'dematerialize', component: DematerializeComponent},
  {data: {title: 'RXJS / Utility Operators / materialize'}, path: 'materialize', component: MaterializeComponent},
  {data: {title: 'RXJS / Utility Operators / observeOn'}, path: 'observeOn', component: ObserveOnComponent},
  {data: {title: 'RXJS / Utility Operators / subscribeOn'}, path: 'subscribeOn', component: SubscribeOnComponent},
  {data: {title: 'RXJS / Utility Operators / timeInterval'}, path: 'timeInterval', component: TimeIntervalComponent},
  {data: {title: 'RXJS / Utility Operators / timestamp'}, path: 'timestamp', component: TimestampComponent},
  {data: {title: 'RXJS / Utility Operators / timeout'}, path: 'timeout', component: TimeoutComponent},
  {data: {title: 'RXJS / Utility Operators / timeoutWith'}, path: 'timeoutWith', component: TimeoutWithComponent},
  {data: {title: 'RXJS / Utility Operators / toArray'}, path: 'toArray', component: ToArrayComponent},
  /*Utility Operators*/

  /*Conditional and Boolean Operators*/
  {data: {title: 'RXJS / Conditional and Boolean Operators / defaultIfEmpty'}, path: 'defaultIfEmpty', component: DefaultIfEmptyComponent},
  {data: {title: 'RXJS / Conditional and Boolean Operators / every'}, path: 'every', component: EveryComponent},
  {data: {title: 'RXJS / Conditional and Boolean Operators / find'}, path: 'find', component: FindComponent},
  {data: {title: 'RXJS / Conditional and Boolean Operators / findIndex'}, path: 'findIndex', component: FindIndexComponent},
  {data: {title: 'RXJS / Conditional and Boolean Operators / isEmpty'}, path: 'isEmpty', component: IsEmptyComponent},
  /*Conditional and Boolean Operators*/

  /*Mathematical and Aggregate Operators*/
  {data: {title: 'RXJS / Mathematical and Aggregate Operators / count'}, path: 'count', component: CountComponent},
  {data: {title: 'RXJS / Mathematical and Aggregate Operators / max'}, path: 'max', component: MaxComponent},
  {data: {title: 'RXJS / Mathematical and Aggregate Operators / min'}, path: 'min', component: MinComponent},
  {data: {title: 'RXJS / Mathematical and Aggregate Operators / reduce'}, path: 'reduce', component: ReduceComponent},
  /*Mathematical and Aggregate Operators*/

  {path: '', redirectTo: 'welcome', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingRoutingModule {
}
