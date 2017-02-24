import {Component, OnInit, OnDestroy} from '@angular/core';
import {AppComponent} from "../app.component";

declare let $: any;
@Component({
  selector: 'app-rout-index',
  templateUrl: './rout-index.component.html',
  styleUrls: ['./rout-index.component.css']
})
export class RoutIndexComponent implements OnInit,OnDestroy {

  constructor() {
  }


  scrollTo(selector) {
    $.smoothScroll({scrollTarget: selector});
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
  }
}
