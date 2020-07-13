import React from 'react';
import { Timeline } from './Timeline';

export const TimelineContainer = ({ data, selectedId }) => {
    return <Timeline
            selectedId={selectedId}
            cardChart={ data.cardChart }
            />
};