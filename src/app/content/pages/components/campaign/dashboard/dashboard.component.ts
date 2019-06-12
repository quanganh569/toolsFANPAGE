import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../../../../../services-FANPAGE/data.service';
import { WebBoxData } from '../../../../../services-FANPAGE/model-FANPAGE/webbox';
import { Subscription } from 'rxjs';


@Component({
  selector: 'm-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  webboxData: WebBoxData[] ;
  chartData: any = [];
  public sub: Subscription;
  constructor(private _data: DataService) {
    this.webboxData = [];
  }

  ngOnInit() {
    this.getwebboxData();
    this.getChartData();
  }
  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  getwebboxData() {
    this.sub = this._data.getWebboxData().subscribe(webbox => {
      this.webboxData = webbox;
    }, error => {
      console.log(error);
    });
  }
  getChartData() {
    this.sub = this._data.getChartData().subscribe(data => {
      this.chartData = data;
    }, error => {
      console.log(error);
    });
  }
}
