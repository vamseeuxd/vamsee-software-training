import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppSideMenuComponent} from './components/app-side-menu/app-side-menu.component';
import {AppRoutingRoutingModule} from './app-routing-routing.module';
import {WelcomeComponent} from './pages/rxjs/welcome/welcome.component';
import {HttpClientModule} from '@angular/common/http';
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

@NgModule({
  declarations: [
    AppComponent,
    AppSideMenuComponent,
    WelcomeComponent,
    BufferComponent,
    BufferCountComponent,
    BufferTimeComponent,
    BufferToggleComponent,
    BufferWhenComponent,
    ConcatMapComponent,
    ConcatMapToComponent,
    ExhaustComponent,
    ExhaustMapComponent,
    ExpandComponent,
    GroupByComponent,
    MapComponent,
    MapToComponent,
    MergeMapComponent,
    MergeMapToComponent,
    MergeScanComponent,
    PairwiseComponent,
    PartitionComponent,
    PluckComponent,
    ScanComponent,
    SwitchMapComponent,
    SwitchMapToComponent,
    WindowComponent,
    WindowCountComponent,
    WindowTimeComponent,
    WindowToggleComponent,
    WindowWhenComponent,
    ObservableComponent,
    SubscriptionComponent,
    SubjectComponent,
    SchedulerComponent,
    PipingComponent,
    HigherOrderObservablesComponent,
    MarbleDiagramsComponent,
    AjaxComponent,
    BindCallbackComponent,
    BindNodeCallbackComponent,
    DeferComponent,
    EmptyComponent,
    FromComponent,
    FromEventComponent,
    FromEventPatternComponent,
    GenerateComponent,
    IntervalComponent,
    OfComponent,
    RangeComponent,
    ThrowErrorComponent,
    TimerComponent,
    IifComponent,
    CombineLatestComponent,
    ConcatComponent,
    ForkJoinComponent,
    MergeComponent,
    RaceComponent,
    ZipComponent,
    AuditComponent,
    AuditTimeComponent,
    DebounceComponent,
    DebounceTimeComponent,
    DistinctComponent,
    DistinctKeyComponent,
    DistinctUntilChangedComponent,
    DistinctUntilKeyChangedComponent,
    ElementAtComponent,
    FilterComponent,
    FirstComponent,
    IgnoreElementsComponent,
    LastComponent,
    SampleComponent,
    SampleTimeComponent,
    SingleComponent,
    SkipComponent,
    SkipLastComponent,
    SkipUntilComponent,
    SkipWhileComponent,
    TakeComponent,
    TakeLastComponent,
    TakeUntilComponent,
    TakeWhileComponent,
    ThrottleComponent,
    ThrottleTimeComponent,
    CombineAllComponent,
    ConcatAllComponent,
    MergeAllComponent,
    StartWithComponent,
    WithLatestFromComponent,
    MulticastComponent,
    PublishComponent,
    PublishBehaviorComponent,
    PublishLastComponent,
    PublishReplayComponent,
    ShareComponent,
    CatchErrorComponent,
    RetryComponent,
    RetryWhenComponent,
    TapComponent,
    DelayComponent,
    DelayWhenComponent,
    DematerializeComponent,
    MaterializeComponent,
    ObserveOnComponent,
    SubscribeOnComponent,
    TimeIntervalComponent,
    TimestampComponent,
    TimeoutComponent,
    TimeoutWithComponent,
    ToArrayComponent,
    DefaultIfEmptyComponent,
    EveryComponent,
    FindComponent,
    FindIndexComponent,
    IsEmptyComponent,
    CountComponent,
    MaxComponent,
    MinComponent,
    ReduceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
