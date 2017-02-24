import {Component, OnInit} from '@angular/core';
declare let $: any;
@Component({
  selector: 'app-rout-home',
  templateUrl: './rout-home.component.html',
  styleUrls: ['./rout-home.component.css']
})
export class RoutHomeComponent implements OnInit {
  navhide: boolean;

  constructor() {

  }

  ngOnInit() {

  }

  returnTop() {
    $("html, body").animate({scrollTop: 0}, 500);
  }

}
