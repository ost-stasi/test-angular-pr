import{ createSelector} from '@ngrx/store'
import { IChartState } from '../states/charts.state'
import { IAppState } from '../states/app.state'

const selectCharts =  (state:IAppState) => state.chart;

export const selectChartList = createSelector(
    selectCharts,
    (state: IChartState) => state.charts
);