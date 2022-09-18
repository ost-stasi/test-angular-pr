import { initialChartDataState, IChartDataState } from "../states/chartdata.state";
import { ChartDataActions, EChartDataActions } from "../actions/chartdata.action";

export const chartdataReducers = (
    state = initialChartDataState,
    action: ChartDataActions
): IChartDataState =>{
    switch(action.type){
        case EChartDataActions.GenerateChartData:
            var random_values = [];
            var random_milliseconds = [];
            for(let i=0; i<action.payload.max_limit; i++){
                random_values.push(Math.random());
                random_milliseconds.push(Math.random() * 100000000000000);
            }
            let random_sorted_milliseconds = random_milliseconds.sort(function(a:number, b:number) {
                return a - b; 
            });
            var random_dates = random_sorted_milliseconds.map(x=>new Date(x));
            return {
                ...state,
                chartdata : {dates: random_dates, values: random_values},
                filtered_chartdata: {dates: random_dates, values: random_values}
            };
        case EChartDataActions.FilterChartData:
            var filtered_dates = [];
            var filtered_values = [];
            for(let i=0; i<state.chartdata.dates.length; i++){
                if(action.payload.end_date >= state.chartdata.dates[i] && state.chartdata.dates[i] >= action.payload.start_date){
                    filtered_dates.push(state.chartdata.dates[i]);
                    filtered_values.push(state.chartdata.values[i]);
                }
            }
            return{
                ...state,
                filtered_chartdata: {dates:filtered_dates, values:filtered_values}
            }
        default:
            return state;
    }
}