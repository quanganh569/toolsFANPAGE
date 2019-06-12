import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Chart } from 'chart.js';
import { CharData } from '../../../../../../services-FANPAGE/model-FANPAGE/char';
import { getViewData } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'm-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit , OnChanges {

  constructor() {
  }

	// tslint:disable-next-line:no-input-rename
	@Input('chartData') data: CharData[] = [];
	colorArr = [
		'rgba(255, 99, 132, 0.3)',
		'rgba(54, 162, 235, 0.3)',
		'rgba(255, 206, 86, 0.3)',
		'rgba(75, 192, 192, 0.3)',
		'rgba(153, 102, 255, 0.3)',
		'rgba(255, 159, 64, 0.3)'
	];
	// likeChart: any;
	lineChart: any;
	likeData: CharData;
	// shareChart: any ;
	shareData: CharData;
	// viewChart: any;
	viewData: CharData;
  	ngOnInit() {
	}

	ngOnChanges() {
		if (this.data.length !== 0) {
			this.setCharData();
		}

	}

	getData() {
		this.likeData = this.data[0];
		this.shareData = this.data[1];
		this.viewData = this.data[2] ;
	}

	setCharData() {
		this.getData();
		this.lineChart = new Chart('lineChart', {
			type: 'line',
			data: {
				// tslint:disable-next-line:max-line-length
				labels:  this.ChartTimeArr(this.likeData),
				datasets: [{
					label: this.likeData.name,
					data: this.ChartDataArr(this.likeData),
					fill: true,
					backgroundColor: this.colorArr[0],
					borderColor: this.colorArr[0],
					borderWidth: 2.5
				},
				{
					label: this.shareData.name,
					data: this.ChartDataArr(this.shareData),
					fill: true,
					backgroundColor: this.colorArr[1],
					borderColor: this.colorArr[1],
					borderWidth: 2.5
				},
				{
					label: this.viewData.name,
					data: this.ChartDataArr(this.viewData),
					fill: true,
					backgroundColor: this.colorArr[2],
					borderColor: this.colorArr[2],
					borderWidth: 2.5
				}
			]
			},
			options: {
				title: {
					text: 'Biểu đồ tương tác',
					display: false
				},
				responsive: true,
			}
		});
		// this.shareChart = new Chart('shareChart', {
		// 	type: 'line',
		// 	data: {
		// 		// tslint:disable-next-line:max-line-length
		// 		labels:  this.ChartTimeArr(this.shareData),
		// 		datasets: [{
		// 			label: this.shareData.name,
		// 			data: this.ChartDataArr(this.shareData),
		// 			fill: true,
		// 			backgroundColor: this.colorArr[1],
		// 			borderColor: this.colorArr[1],
		// 			borderWidth: 2.5
		// 		}]
		// 	},
		// 	options: {
		// 		title: {
		// 			text: 'Biểu đồ số lượng share',
		// 			display: true
		// 		},
		// 		scaleShowVerticalLines: false,
		// 		responsive: true
		// 	}
		// });
		// this.viewChart = new Chart('viewChart', {
		// 	type: 'line',
		// 	data: {
		// 		// tslint:disable-next-line:max-line-length
		// 		labels:  this.ChartTimeArr(this.viewData),
		// 		datasets: [{
		// 			label: this.viewData.name,
		// 			data: this.ChartDataArr(this.viewData),
		// 			fill: true,
		// 			backgroundColor: this.colorArr[2],
		// 			borderColor: this.colorArr[2],
		// 			borderWidth: 2.5
		// 		}]
		// 	},
		// 	options: {
		// 		title: {
		// 			text: 'Biểu đồ số lượng share',
		// 			display: true
		// 		},
		// 		scaleShowVerticalLines: false,
		// 		responsive: true
		// 	}
		// });
	}

	ChartDataArr(arr: CharData) {
		// tslint:disable-next-line:prefer-const
		let rs: any = [];
		// tslint:disable-next-line:prefer-const
		let data: any = arr.data;
		data.forEach(item => {
			rs.push(item.amount);
		});
		return rs;
	}

	ChartTimeArr(arr: CharData) {
		// tslint:disable-next-line:prefer-const
		let rs: any = [];
		// tslint:disable-next-line:prefer-const
		let data: any = arr.data;
		data.forEach(item => {
			// tslint:disable-next-line:prefer-const
			let time = new Date(item.time).toDateString();
			rs.push(time);
		});
		return rs;
	}
}
