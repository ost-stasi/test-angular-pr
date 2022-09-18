import { initialChartState, IChartState } from "../states/charts.state";
import { ChartActions, EChartActions } from "../actions/chart.action";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

export const chartReducers = (
    state = initialChartState,
    action: ChartActions
): IChartState =>{
    switch(action.type){
        case EChartActions.GetChart:
            return {
                ...state,
                chart : action.payload
            };
        case EChartActions.AddChart:{
            const id = state.id+1;
            const new_chart = {
                id: id,
                chart_title: action.payload.chart_title,
                x_title: action.payload.x_title,
                y_title: action.payload.y_title,
                type: action.payload.type,
                color: action.payload.color
            };
            const new_charts = [...state.charts]
            new_charts.push(new_chart)
            return {
                ...state,
                id: id,
                charts: new_charts
            }
        }
        case EChartActions.DeleteChart:{
            const chart_index = state.charts.findIndex(
                (item) => item.id === action.payload.id
            )
            const new_charts = [...state.charts]
            new_charts.splice(chart_index, 1)
            return {
                ...state,
                charts: new_charts
            }
        }
        case EChartActions.ChangeChart:{
            const chart_index = state.charts.findIndex(
                (item) => item.id === action.payload.id
            )
            const new_charts = [...state.charts]
            new_charts[chart_index] = action.payload
            return {
                ...state,
                charts: new_charts
            }
        }
        default:
            return state;
    }
}