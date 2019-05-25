import React from 'react';
import { Scales } from './Scales';

export const ScalesContainer = ({ data }) => {
    return (
        <Scales
            upperEntries={data.upperEntries} 
            lowerEntries={data.lowerEntries} 
            centuries={ data.centuries }
        ></Scales>
    )
};