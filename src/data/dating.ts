import moment, { Moment } from 'moment';

export interface IDating {
    type: 'range';
    from: Moment;
    to: Moment;
}

export const Range = ({ from, to }: { from: Date|number|string, to: Date|number|string }) : IDating => {
    let fromDate = typeof from == 'number'
                   ? moment({ year: from })
                   : moment(from);

    let toDate = typeof to == 'number'
                   ? moment({ year: to })
                   : moment(to);

    return {
        type: 'range',
        from: fromDate,
        to: toDate,
    }

}