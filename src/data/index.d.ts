import { IHistoryEvent } from "./HistoryEvent";

export interface IHistoryChartData {
    events: { [key: string]: IHistoryEvent };
    from: number;
    to: number;
    cardChart: {
        maxRow: number;
        cards: IChartCard[];
    }
    barChart: {
        maxRow: number;
        cards: IChartCard[];
    }
}

export const data: IHistoryChartData;