import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppSideMenuComponent} from './components/app-side-menu/app-side-menu.component';
import {AppRoutingRoutingModule} from './app-routing-routing.module';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import {HttpClientModule} from '@angular/common/http';
import { BufferComponent } from './pages/buffer/buffer.component';
import { BufferCountComponent } from './pages/buffer-count/buffer-count.component';
import { BufferTimeComponent } from './pages/buffer-time/buffer-time.component';
import { BufferToggleComponent } from './pages/buffer-toggle/buffer-toggle.component';
import { BufferWhenComponent } from './pages/buffer-when/buffer-when.component';
import { ConcatMapComponent } from './pages/concat-map/concat-map.component';
import { ConcatMapToComponent } from './pages/concat-map-to/concat-map-to.component';
import { ExhaustComponent } from './pages/exhaust/exhaust.component';
import { ExhaustMapComponent } from './pages/exhaust-map/exhaust-map.component';
import { ExpandComponent } from './pages/expand/expand.component';
import { GroupByComponent } from './pages/group-by/group-by.component';
import { MapComponent } from './pages/map/map.component';
import { MapToComponent } from './pages/map-to/map-to.component';
import { MergeMapComponent } from './pages/merge-map/merge-map.component';
import { MergeMapToComponent } from './pages/merge-map-to/merge-map-to.component';
import { MergeScanComponent } from './pages/merge-scan/merge-scan.component';
import { PairwiseComponent } from './pages/pairwise/pairwise.component';
import { PartitionComponent } from './pages/partition/partition.component';
import { PluckComponent } from './pages/pluck/pluck.component';
import { ScanComponent } from './pages/scan/scan.component';
import { SwitchMapComponent } from './pages/switch-map/switch-map.component';
import { SwitchMapToComponent } from './pages/switch-map-to/switch-map-to.component';
import { WindowComponent } from './pages/window/window.component';
import { WindowCountComponent } from './pages/window-count/window-count.component';
import { WindowTimeComponent } from './pages/window-time/window-time.component';
import { WindowToggleComponent } from './pages/window-toggle/window-toggle.component';
import { WindowWhenComponent } from './pages/window-when/window-when.component';
import { ObservableComponent } from './pages/observable/observable.component';
import { SubscriptionComponent } from './pages/subscription/subscription.component';
import { SubjectComponent } from './pages/subject/subject.component';
import { SchedulerComponent } from './pages/scheduler/scheduler.component';
import { PipingComponent } from './pages/piping/piping.component';
import { HigherOrderObservablesComponent } from './pages/higher-order-observables/higher-order-observables.component';
import { MarbleDiagramsComponent } from './pages/marble-diagrams/marble-diagrams.component';
import { AjaxComponent } from './pages/ajax/ajax.component';
import { BindCallbackComponent } from './pages/bind-callback/bind-callback.component';
import { BindNodeCallbackComponent } from './pages/bind-node-callback/bind-node-callback.component';
import { DeferComponent } from './pages/defer/defer.component';
import { EmptyComponent } from './pages/empty/empty.component';
import { FromComponent } from './pages/from/from.component';
import { FromEventComponent } from './pages/from-event/from-event.component';
import { FromEventPatternComponent } from './pages/from-event-pattern/from-event-pattern.component';
import { GenerateComponent } from './pages/generate/generate.component';
import { IntervalComponent } from './pages/interval/interval.component';
import { OfComponent } from './pages/of/of.component';
import { RangeComponent } from './pages/range/range.component';
import { ThrowErrorComponent } from './pages/throw-error/throw-error.component';
import { TimerComponent } from './pages/timer/timer.component';
import { IifComponent } from './pages/iif/iif.component';
import { CombineLatestComponent } from './pages/combine-latest/combine-latest.component';
import { ConcatComponent } from './pages/concat/concat.component';
import { ForkJoinComponent } from './pages/fork-join/fork-join.component';
import { MergeComponent } from './pages/merge/merge.component';
import { RaceComponent } from './pages/race/race.component';
import { ZipComponent } from './pages/zip/zip.component';
import { AuditComponent } from './pages/audit/audit.component';
import { AuditTimeComponent } from './pages/audit-time/audit-time.component';
import { DebounceComponent } from './pages/debounce/debounce.component';
import { DebounceTimeComponent } from './pages/debounce-time/debounce-time.component';
import { DistinctComponent } from './pages/distinct/distinct.component';
import { DistinctKeyComponent } from './pages/distinct-key/distinct-key.component';
import { DistinctUntilChangedComponent } from './pages/distinct-until-changed/distinct-until-changed.component';
import { DistinctUntilKeyChangedComponent } from './pages/distinct-until-key-changed/distinct-until-key-changed.component';
import { ElementAtComponent } from './pages/element-at/element-at.component';
import { FilterComponent } from './pages/filter/filter.component';
import { FirstComponent } from './pages/first/first.component';
import { IgnoreElementsComponent } from './pages/ignore-elements/ignore-elements.component';
import { LastComponent } from './pages/last/last.component';
import { SampleComponent } from './pages/sample/sample.component';
import { SampleTimeComponent } from './pages/sample-time/sample-time.component';
import { SingleComponent } from './pages/single/single.component';
import { SkipComponent } from './pages/skip/skip.component';
import { SkipLastComponent } from './pages/skip-last/skip-last.component';
import { SkipUntilComponent } from './pages/skip-until/skip-until.component';
import { SkipWhileComponent } from './pages/skip-while/skip-while.component';
import { TakeComponent } from './pages/take/take.component';
import { TakeLastComponent } from './pages/take-last/take-last.component';
import { TakeUntilComponent } from './pages/take-until/take-until.component';
import { TakeWhileComponent } from './pages/take-while/take-while.component';
import { ThrottleComponent } from './pages/throttle/throttle.component';
import { ThrottleTimeComponent } from './pages/throttle-time/throttle-time.component';
import { CombineAllComponent } from './pages/combine-all/combine-all.component';
import { ConcatAllComponent } from './pages/concat-all/concat-all.component';
import { MergeAllComponent } from './pages/merge-all/merge-all.component';
import { StartWithComponent } from './pages/start-with/start-with.component';
import { WithLatestFromComponent } from './pages/with-latest-from/with-latest-from.component';
import { MulticastComponent } from './pages/multicast/multicast.component';
import { PublishComponent } from './pages/publish/publish.component';
import { PublishBehaviorComponent } from './pages/publish-behavior/publish-behavior.component';
import { PublishLastComponent } from './pages/publish-last/publish-last.component';
import { PublishReplayComponent } from './pages/publish-replay/publish-replay.component';
import { ShareComponent } from './pages/share/share.component';
import { CatchErrorComponent } from './pages/catch-error/catch-error.component';
import { RetryComponent } from './pages/retry/retry.component';
import { RetryWhenComponent } from './pages/retry-when/retry-when.component';
import { TapComponent } from './pages/tap/tap.component';
import { DelayComponent } from './pages/delay/delay.component';
import { DelayWhenComponent } from './pages/delay-when/delay-when.component';
import { DematerializeComponent } from './pages/dematerialize/dematerialize.component';
import { MaterializeComponent } from './pages/materialize/materialize.component';
import { ObserveOnComponent } from './pages/observe-on/observe-on.component';
import { SubscribeOnComponent } from './pages/subscribe-on/subscribe-on.component';
import { TimeIntervalComponent } from './pages/time-interval/time-interval.component';
import { TimestampComponent } from './pages/timestamp/timestamp.component';
import { TimeoutComponent } from './pages/timeout/timeout.component';
import { TimeoutWithComponent } from './pages/timeout-with/timeout-with.component';
import { ToArrayComponent } from './pages/to-array/to-array.component';
import { DefaultIfEmptyComponent } from './pages/default-if-empty/default-if-empty.component';
import { EveryComponent } from './pages/every/every.component';
import { FindComponent } from './pages/find/find.component';
import { FindIndexComponent } from './pages/find-index/find-index.component';
import { IsEmptyComponent } from './pages/is-empty/is-empty.component';
import { CountComponent } from './pages/count/count.component';
import { MaxComponent } from './pages/max/max.component';
import { MinComponent } from './pages/min/min.component';
import { ReduceComponent } from './pages/reduce/reduce.component';

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
