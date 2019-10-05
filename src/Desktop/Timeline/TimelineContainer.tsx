import React, { useLayoutEffect, useState } from 'react';
import { Timeline } from './Timeline';

export const TimelineContainer = ({ data, selectedId }) => {
    return <Timeline
            selectedId={selectedId}
            cards={ data.cards }
            />
    // const [state, setState] = useState({ sizeId: 'm' });

    // useLayoutEffect(()=>{
    //     const windowHeight = window.innerHeight;
    //     let sizeId;

    //     // TODO: do the calculations based on entry rows actual heights
    //     if (windowHeight > 1000) {
    //         sizeId = 'l';
    //     } else if (windowHeight > 720) {
    //         sizeId = 'm';
    //     } else  {
    //         sizeId = 's';
    //     }

    //     if (state.sizeId !== sizeId) {
    //         setState({ sizeId });
    //     }
    // });

    // const { cards } = data;

    // return (
    //     <Timeline
    //         sizeId={state.sizeId}
    //         selectedId={selectedId}
    //         sizes={sizes}
    //         decades={decades}
    //         entries={entries}
    //         upperEntries={upperEntries}
    //         lowerEntries={lowerEntries}
    //     ></Timeline>
    // )
};