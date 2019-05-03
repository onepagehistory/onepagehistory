import { Moment } from 'moment';

export interface IDating {
    type: 'range';
    from: Moment;
    to: Moment;
}

export declare const range =
    ({ from, to } : { from: Date|number|string, to: Date|number|string }) => IDating;