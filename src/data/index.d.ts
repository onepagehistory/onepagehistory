import { IHistoryEvent } from "./HistoryEvent";

export interface IHistoryChartData {
    events: { [key: string]: IHistoryEvent };
    cards: IChartCard[];
    from: number;
    to: number;
    bars: { [key: string]: IHistoryEvent },
}

export const data: IHistoryChartData;