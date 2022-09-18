import { IChartdata } from "src/classes/chartdata";

export interface IChartDataState{
    chartdata: IChartdata;
    filtered_chartdata: IChartdata;
}

export const initialChartDataState: IChartDataState = {
    chartdata: {
        dates: [],
        values: []
    },
    filtered_chartdata:{
        dates: [],
        values: []
    }
};
