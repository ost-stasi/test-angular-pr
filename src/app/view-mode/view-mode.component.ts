import { Component, OnInit } from '@angular/core';
import { IAppState } from 'src/store/states/app.state';
import {Store, select} from "@ngrx/store"
import { FilterChartData, GenerateChartData} from 'src/store/actions/chartdata.action';
import { createMask } from '@ngneat/input-mask';
import { ChartDataService } from '../services/chartdata.service';

@Component({
  selector: 'app-view-mode',
  templateUrl: './view-mode.component.html',
  styleUrls: ['./view-mode.component.css']
})
export class ViewModeComponent implements OnInit {

  x_data = [];
  y_data= [];
  period: any;
  charts: [] = [];
  dateInputMask = createMask<Date[]>({
    alias: 'datetime',
    inputFormat: 'mm/dd/yyyy - mm/dd/yyyy',
    parser: (value: string) => {
      const values = value.split(' - ');
      console.log(values);
      const dates = values.map(x=> {
        let val= x.split('/');
        let year = +val[2];
        let month = +val[0] - 1;
        let date = +val[1];
        return new Date(year, month, date);  
      })
      return dates;
    },
  });
  
  constructor(private _store: Store<IAppState>, private _chartdataService: ChartDataService) { 
  }

  ngOnInit(): void {
    console.log(this.charts.length)
    console.log(this._store.dispatch(new GenerateChartData({max_limit: 100})))
    console.log(this._store.pipe(select((store) => store.chartdata.chartdata)));
    const that = this;
    this._store.pipe(select(store=> store.chartdata.filtered_chartdata)).subscribe({
      next(data:any) {that.x_data = data.dates; that.y_data = data.values},
      error(err: Error){console.error('Observer got an error: ' + err);}
    });
    this._store.pipe(select(store=> store.chart.charts)).subscribe({
      next(data:any) {that.charts = data},
      error(err: Error){console.error('Observer got an error: ' + err);}
    });
  }

  filter_chartdata(){
    const that = this;
    if(!isNaN(this.period[0])  && !isNaN(this.period[1])){
      this._store.dispatch(new FilterChartData({start_date: this.period[0], end_date: this.period[1]}));
      this._store.pipe(select(store=> store.chartdata.filtered_chartdata)).subscribe({
        next(data:any) {that._chartdataService.change_chartdata(data.dates, data.values)},
        error(err: Error){console.error('Observer got an error: ' + err);}
      });
    }
  }
  
}
