import { Action } from "ngx-bootstrap/mini-ngrx";
import { IChartdata} from "src/classes/chartdata";

export enum EChartDataActions{
    GetChartData = '[chartdata] get chartdata',
    GenerateChartData = '[chartdata] generate chartdata',
    FilterChartData = '[chartdata] filter chartdata',
    FilterChartDataSuccess = '[chartdata] filter chartdata success'
}

export class GetChartData implements Action{
    public readonly type = EChartDataActions.GetChartData;
} 

export class FilterChartData implements Action{
    public readonly type = EChartDataActions.FilterChartData;
    constructor(public payload: {start_date:Date, end_date:Date}){}
}

export class GenerateChartData implements Action{
    public readonly type = EChartDataActions.GenerateChartData;
    constructor(public payload: {max_limit:number}){}
} 

export type ChartDataActions = GetChartData | GenerateChartData | FilterChartData