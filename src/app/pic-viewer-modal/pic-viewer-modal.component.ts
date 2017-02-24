import {Component, OnInit} from '@angular/core';
import {HomeItem} from "../entitys/HomeItem";
import { ModalModule } from 'ng2-bootstrap/modal';

@Component({
  selector: 'app-pic-viewer-modal',
  templateUrl: './pic-viewer-modal.component.html',
  styleUrls: ['./pic-viewer-modal.component.css']
})
export class PicViewerModalComponent implements OnInit {
  item: HomeItem;
  constructor() {
  }
  ngOnInit() {
  }

  chooseItem(item:HomeItem){
    this.item=item;
  }
  clearItem(){
    this.item=null;
  }

}
