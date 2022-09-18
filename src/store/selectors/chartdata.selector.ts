import{ createSelector} from '@ngrx/store'
import { IChartDataState } from '../states/chartdata.state'
import { IAppState } from '../states/app.state'

const selectChartData =  (state:IAppState) => state.chartdata;
const selectFilteredChartData =  (state:IAppState) => state.chartdata.filtered_chartdata;

export const selectChartDatas = createSelector(
    selectChartData,
    selectFilteredChartData,
    (state: IChartDataState) => state.chartdata
);