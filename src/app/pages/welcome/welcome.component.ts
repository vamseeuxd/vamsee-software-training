import {Component} from '@angular/core';
import {of} from 'rxjs';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  /*
    ╔════╤═══════════════╤═══════════════╤═╤════╤═══════════════╤═══════════════╤═╤════╤═══════════════╤═══════════════╗
    ║ #  │ Operator Name │    Status     │ │ #  │ Operator Name │    Status     │ │ #  │ Operator Name │    Status     ║
    ╠════╪═══════════════╪═══════════════╡ ╞════╪═══════════════╪═══════════════╡ ╞════╪═══════════════╪═══════════════╣
    ║ 1  │ buffer        │ Need to Start │ │ 11 │ groupBy       │ Need to Start │ │ 21 │ switchMap     │ Need to Start ║
    ╟────┼───────────────┼───────────────┤ ├────┼───────────────┼───────────────┤ ├────┼───────────────┼───────────────╢
    ║ 2  │ bufferCount   │ Need to Start │ │ 12 │ map           │ Need to Start │ │ 22 │ switchMapTo   │ Need to Start ║
    ╟────┼───────────────┼───────────────┤ ├────┼───────────────┼───────────────┤ ├────┼───────────────┼───────────────╢
    ║ 3  │ bufferTime    │ Need to Start │ │ 13 │ mapTo         │ Need to Start │ │ 23 │ window        │ Need to Start ║
    ╟────┼───────────────┼───────────────┤ ├────┼───────────────┼───────────────┤ ├────┼───────────────┼───────────────╢
    ║ 4  │ bufferToggle  │ Need to Start │ │ 14 │ mergeMap      │ Need to Start │ │ 24 │ windowCount   │ Need to Start ║
    ╟────┼───────────────┼───────────────┤ ├────┼───────────────┼───────────────┤ ├────┼───────────────┼───────────────╢
    ║ 5  │ bufferWhen    │ Need to Start │ │ 15 │ mergeMapTo    │ Need to Start │ │ 25 │ windowTime    │ Need to Start ║
    ╟────┼───────────────┼───────────────┤ ├────┼───────────────┼───────────────┤ ├────┼───────────────┼───────────────╢
    ║ 6  │ concatMap     │ Need to Start │ │ 16 │ mergeScan     │ Need to Start │ │ 26 │ windowToggle  │ Need to Start ║
    ╟────┼───────────────┼───────────────┤ ├────┼───────────────┼───────────────┤ ├────┼───────────────┼───────────────╢
    ║ 7  │ concatMapTo   │ Need to Start │ │ 17 │ pairwise      │ Need to Start │ │ 27 │ windowWhen    │ Need to Start ║
    ╟────┼───────────────┼───────────────┤ ├────┼───────────────┼───────────────┼ ┴────┴───────────────┴───────────────╢
    ║ 8  │ exhaust       │ Need to Start │ │ 18 │ partition     │ Need to Start │                                      ║
    ╟────┼───────────────┼───────────────┤ ├────┼───────────────┼───────────────┤                                      ║
    ║ 9  │ exhaustMap    │ Need to Start │ │ 19 │ pluck         │ Need to Start │                                      ║
    ╟────┼───────────────┼───────────────┤ ├────┼───────────────┼───────────────┤                                      ║
    ║ 10 │ expand        │ Need to Start │ │ 20 │ scan          │ Need to Start │                                      ║
    ╚════╧═══════════════╧═══════════════╧═╧════╧═══════════════╧═══════════════╧══════════════════════════════════════╝
  */
  masterDate = of([
    {name: '1'},
    {name: '2'},
    {name: '3'},
    {name: '4'},
    {name: '5'},
  ]);
  items$ = this.masterDate;

}
