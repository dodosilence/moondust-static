import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-rout-pic-viewer',
  templateUrl: './rout-pic-viewer.component.html',
  styleUrls: ['./rout-pic-viewer.component.css']
})
export class RoutPicViewerComponent implements OnInit {
  pic

  constructor(private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.pic = +this.route.snapshot.params['id'];
  }

}
