import React from 'react';
import { Scales } from './Scales';
import { plotChart } from '../data/plot-chart.js';

export const ScalesContainer = ({ data: rawData, selectedId }) => {
    // TODO: do client-side plotting only in dev mode
    const data = plotChart(rawData);
    return (
        <Scales
            selectedId={selectedId}
            upperEntries={data.upperEntries} 
            lowerEntries={data.lowerEntries} 
            centuries={ data.centuries }
            decades={ data.decades }
        ></Scales>
    )
};