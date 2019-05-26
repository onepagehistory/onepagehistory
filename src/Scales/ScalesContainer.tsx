import React from 'react';
import { Scales } from './Scales';

export const ScalesContainer = ({ data, selectedId }) => {
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