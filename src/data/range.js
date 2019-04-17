import moment from 'moment';

export const range = ({ from, to }) => {
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