import { IHistoryEvent } from "./HistoryEvent";

export interface IChartCard {
    eventId: string;
    from: number;
    to: number;
    row: number;
}



/**
 *                       
 *                       
 *                       
 *                       
 *                       
 * [      ]              
 * |      |              
 * [      ]--------------
 */

export function plotChart (entries: IHistoryEvent[]) : IChartCard[];