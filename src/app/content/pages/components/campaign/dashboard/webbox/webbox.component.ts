import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { webbox } from './webbox';
import { WebBoxData } from '../../../../../../services-FANPAGE/model-FANPAGE/webbox';

@Component({
  selector: 'm-webbox',
  templateUrl: './webbox.component.html',
  styleUrls: ['./webbox.component.scss']
})
export class WebboxComponent implements OnInit, OnChanges {

  // tslint:disable-next-line:no-input-rename
  @Input('webboxData') data: WebBoxData[] = [];
  campBox: webbox = new webbox('', '');
  likeBox: webbox = new webbox('', '');
  shareBox: webbox = new webbox('', '');
  viewBox: webbox = new webbox('', '');

  constructor() {
   }

  ngOnInit() {
  }
  ngOnChanges() {
    this.getData();
  }

  getData() {
    if (this.data.length !== 0) {
      this.campBox = new webbox(this.data[0].name, this.data[0].runningNum + '/' + this.data[0].totalNum);
      this.likeBox = new webbox(this.data[1].name, this.data[1].totalNum);
      this.shareBox = new webbox(this.data[2].name, this.data[2].totalNum);
      this.viewBox = new webbox(this.data[3].name, this.data[3].totalNum);
    }

  }
}
