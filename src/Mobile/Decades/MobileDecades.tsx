import React, { useMemo } from 'react';
import { useSiteData } from 'react-static';
import { YEAR_LENGTH } from '../../shared/const.js';
import './MobileDecades.scss';

export const MobileDecades = () => {
    const { data } = useSiteData();
    const { from, to } = data;

    const decades = useMemo(()=>{
        const toDecade = 10 * Math.ceil(to / 10);
        const fromDecade   = 10 * Math.floor(from / 10);
        const array = new Array(toDecade - fromDecade)
                .fill(undefined)
                .map((_, i) => toDecade - i * 10);

        return array;
    }, [ from, to ]);

    return (
        <div
            className="mobile-decades"
        >
            <div
                className="mobile-decades__wrapper"
            >{
                decades.map(d =>
                    <div
                        key={ d }
                        className="mobile-decades__decade"
                        style={
                            { left: (to - d) * YEAR_LENGTH
                            , width: 10 * YEAR_LENGTH
                            }
                        }
                        >{d}</div>
                )
            }</div>
        </div>
    );
}