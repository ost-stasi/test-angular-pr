import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ChartDataService } from 'src/app/services/chartdata.service';

@Component({
  selector: 'app-highchart',
  templateUrl: './highchart.component.html',
  styleUrls: ['./highchart.component.css']
})
export class HighchartComponent implements OnInit, OnDestroy {

  @Input() chart = {
    chart_title:"",
    x_title:"",
    y_title:"",
    type: 'line',
    color: 'blue'
  };
  type: any;
  @Input() x_data = [];
  @Input() y_data = [];
  subscription: any;
  highcharts = Highcharts;

  chartOptions: Highcharts.Options = {}; 
  constructor(private _chartdataService: ChartDataService) {
    
   }

  ngOnInit(): void {
    const that = this;
    this.subscription = this._chartdataService.chartdata$.subscribe({
      next(item){that.x_data = item.x_data; that.y_data = item.y_data;  that.chartOptions = that.get_options();},
      error(err){console.log('err: ', err)}
    });
    this.type = this.chart["type"];
    this.chartOptions = this.get_options()
  }

  get_options(){
    return  {
      plotOptions:{
        line:{
          color: this.chart.color,
        }
      },
      title: {
        text: this.chart.chart_title
      },
      xAxis: {
        categories: this.x_data,
        title:{
          text: this.chart.x_title
        }
      },
      yAxis: {
        title: {
          text: this.chart.y_title,
        }
      },
      series: [{
        data: this.y_data,
        type: this.type,
      },]
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
