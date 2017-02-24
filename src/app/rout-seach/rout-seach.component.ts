import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-rout-seach',
  templateUrl: './rout-seach.component.html',
  styleUrls: ['./rout-seach.component.css']
})
export class RoutSeachComponent implements OnInit,OnDestroy {


  private keyWord: String;
  private subscription: Subscription;
  private resultList:String[]=[];

  constructor(private router: Router, private activateRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscription = this.activateRoute.queryParams.subscribe(params => {
      this.keyWord = params['keyword']
    });
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
