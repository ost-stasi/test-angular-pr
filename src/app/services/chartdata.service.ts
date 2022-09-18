import { Injectable} from "@angular/core";
import { Subject } from 'rxjs';

@Injectable()
export class ChartDataService {
    public chartdata$ = new Subject<any>();
    constructor() {
        console.log('shared service started');
    }

    public change_chartdata(date:[], values:[]) {
        this.chartdata$.next({x_data:date, y_data: values}); 
    }

} 