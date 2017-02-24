import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-seach-box',
  templateUrl: './seach-box.component.html',
  styleUrls: ['./seach-box.component.css']
})
export class SeachBoxComponent implements OnInit {
  keyWord: string;
  resultLists: string[] = [];
  resultCollapseHide: boolean = true;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  queryKeyWord() {
    if (this.keyWord != null && this.keyWord.length >= 3) {
      this.resultLists = ['animation', 'zhongwen', 'nihao']
      this.resultCollapseHide = false;
    } else {
      this.resultLists = []
      this.resultCollapseHide = true;
    }
  }

  toSearchNavigation() {
    this.router.navigate(['/search.html'], {queryParams: {'keyword':this.keyWord}});
    this.keyWord = null;
  }

}
