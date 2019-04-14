import { Moment } from 'moment';
import { CURRENT_YEAR } from './currentYear';

export const getTopPos = (date: number|Moment) =>
    1.5 * (CURRENT_YEAR -
            (typeof date == 'number' ? date : date.year())
          )