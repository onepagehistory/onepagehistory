import { HistoryData } from './../data/History';
export interface IPosition {
    x: number;
    y: number;
}

export interface Rectangle extends IPosition {
    width: number;
    height: number;
}

export interface RectangleWithPosition extends Rectangle, IPosition {};

export type RectanglesArray = RectangleWithPosition[];
