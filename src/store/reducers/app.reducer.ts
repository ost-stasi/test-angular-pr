import {ActionReducerMap} from "@ngrx/store";
import { IAppState } from "../states/app.state";
import {routerReducer} from "@ngrx/router-store";
import { chartdataReducers } from "./chartdata.reducer";
import { chartReducers } from "./chart.reducer";

export const appReducers: ActionReducerMap<IAppState, any> = {
    router: routerReducer,
    chart: chartReducers,
    chartdata: chartdataReducers,
}