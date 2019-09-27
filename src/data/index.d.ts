import { IHistoryEvent } from "./HistoryEvent";

export interface IHistoryChartData {
    events: { [key: string]: IHistoryEvent };
    cards: IChartCard[];
}

export const data: IHistoryChartData;