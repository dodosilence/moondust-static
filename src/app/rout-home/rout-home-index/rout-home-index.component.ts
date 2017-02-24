import {
  Component, OnInit, animate, style, transition, state, trigger, HostBinding, ViewChild,
  AfterContentInit, AfterViewInit, OnChanges, SimpleChanges
} from '@angular/core';
import {HomeItem} from "../../entitys/HomeItem";
import {PicViewerModalComponent} from "../../pic-viewer-modal/pic-viewer-modal.component";

@Component({
  selector: 'app-rout-home-index',
  templateUrl: './rout-home-index.component.html',
  styleUrls: ['./rout-home-index.component.css'],
  animations: [
    trigger('routeAnimation', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateY(5rem)'
        }),
        animate('0.3s ease-in')
      ]),
    ])
  ]
})

export class RoutHomeIndexComponent implements OnInit,AfterViewInit {


  items: HomeItem[] = [];
  active: boolean = false;
  loadCount: number = 24;


  @ViewChild(PicViewerModalComponent)
  picViewerModalComponent: PicViewerModalComponent;

  constructor() {
  }

  ngOnInit() {
    for (let i = 1; i <= this.loadCount; i++) {
      this.items.push(new HomeItem("TITLE", "content", i + '' + new Date().getTime(), i + '', 2, 2, new Date()));
    }
  }

  chooseItem() {
    this.active = !this.active;
  }

  addItems() {
    for (let i = 1; i <= this.loadCount; i++) {
      this.items.push(new HomeItem("TITLE", "content", i + '' + new Date().getTime(), i + '', 2, 2, new Date()));
    }
  }

  msnry;

  ngAfterViewInit(): void {

  }

}

