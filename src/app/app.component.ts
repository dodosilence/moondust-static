import {Component, ViewChild, OnInit, OnDestroy} from '@angular/core';
import {SeachBoxComponent} from "./seach-box/seach-box.component";
import {Route, Router, RouterState} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit,OnDestroy {
  public static headNavShow: boolean = true;

  ngOnInit(): void {
    console.log('init')
  }

  ngOnDestroy(): void {
    console.log('desc')
  }

  navLeftShow = false;
  state: RouterState;

  constructor(router: Router) {
    this.state = router.routerState;
  }

  showOrHideNavLeft(show) {
    this.navLeftShow = show
  }


  go(num) {
    history.go(num)
  }

  headNavShow() {
    return AppComponent.headNavShow;
  }
}
