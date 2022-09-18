import { Action } from "ngx-bootstrap/mini-ngrx";
import { IChart } from "src/classes/chart";

export enum EChartActions{
    GetCharts = '[chart] Get Charts',
    GetChart = '[chart] Get Chart',
    DeleteChart = '[chart] Delete Chart',
    AddChart = '[chart] Add Chart',
    ChangeChart = '[chart] Change Chart'
}

export class GetCharts implements Action{
    public readonly type = EChartActions.GetCharts;
} 

export class GetChart implements Action{
    public readonly type = EChartActions.GetChart;
    constructor(public payload: IChart){}
} 

export class DeleteChart implements Action{
    public readonly type = EChartActions.DeleteChart;
    constructor(public payload: {id:number}){}
} 

export class AddChart implements Action{
    public readonly type = EChartActions.AddChart;
    constructor(public payload: {type:any, chart_title: string, x_title:string, y_title: string, color:string}){}
} 

export class ChangeChart implements Action{
    public readonly type = EChartActions.ChangeChart;
    constructor(public payload: IChart){}
} 

export type ChartActions = GetChart | GetCharts | AddChart | DeleteChart | ChangeChart