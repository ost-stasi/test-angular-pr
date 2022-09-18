import { RouterReducerState } from "@ngrx/router-store";
import { initialChartDataState, IChartDataState } from "./chartdata.state";
import { initialChartState, IChartState } from "./charts.state";

export interface IAppState{
    router?: RouterReducerState;
    chartdata: IChartDataState;
    chart: IChartState;
}

export const initialAppState: IAppState = {
    chartdata: initialChartDataState,
    chart: initialChartState,
}

/*export interface initialAppState extends IAppState{
    chart: initialChartState;
    chartdata: initialChartDataState;

}*/

export function getIniitialState(): IAppState{
    return initialAppState;
}