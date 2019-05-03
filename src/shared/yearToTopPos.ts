import { Moment } from 'moment';
import { CURRENT_YEAR } from './currentYear';
import { SCALE } from './const';

export const getTopPos = (date: number|Moment) =>
    SCALE * (CURRENT_YEAR -
            (typeof date == 'number' ? date : date.year())
          )