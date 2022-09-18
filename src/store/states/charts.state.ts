import { IChart } from "src/classes/chart";

export interface IChartState{
    charts: Array<IChart>;
    chart: IChart;
    id: number;
}

export const initialChartState: IChartState = {
    charts: [],
    id:0,
    chart: {
        id: 0,
        chart_title : "",
        x_title: "",
        y_title: "",
        type: "line",
        color: "blue"
    }
};