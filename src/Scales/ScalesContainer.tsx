import React, { useLayoutEffect, useState, useEffect } from 'react';
import { Scales } from './Scales';
import { plotChart } from '../data/plot-chart.js';

const SCROLL_COEFF = 50;

// TODO: try css horizontal scrolling which seem to behave nicely
// https://css-tricks.com/pure-css-horizontal-scrolling/
// or try again js approach, which is a bit bulky
// https://css-tricks.com/pure-css-horizontal-scrolling/
function onWheel(event) {
    if (event.ctrlKey) {
        return;
    }

    if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
        return true;
    }

    window.scroll(window.scrollX + event.deltaY * SCROLL_COEFF, 0);
}

export const ScalesContainer = ({ data: rawData, selectedId }) => {
    // TODO: do client-side plotting only in dev mode
    const data = plotChart(rawData);

    const [state, setState] = useState({ sizeId: 'm' });

    useLayoutEffect(()=>{
        const windowHeight = window.innerHeight;
        let sizeId;

        // TODO: do the calculations based on entry rows actual heights
        if (windowHeight > 1000) {
            sizeId = 'l';
        } else if (windowHeight > 720) {
            sizeId = 'm';
        } else  {
            sizeId = 's';
        }

        if (state.sizeId !== sizeId) {
            setState({ sizeId });
        }
    });

    useEffect(()=>{
        window.addEventListener('wheel', onWheel);
        return () => {
            window.removeEventListener('wheel', onWheel);
        }
    })

    const { decades, entries } = data;
    const
        { upperEntries
        , lowerEntries
        , sizes
        } = data.plot[state.sizeId];

    return (
        <Scales
            sizeId={state.sizeId}
            selectedId={selectedId}
            sizes={sizes}
            decades={decades}
            entries={entries}
            upperEntries={upperEntries}
            lowerEntries={lowerEntries}
        ></Scales>
    )
};