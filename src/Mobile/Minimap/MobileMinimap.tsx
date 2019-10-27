import * as React from 'react';
import { Minimap } from '../../shared/Minimap';
import './MobileMinimap.scss';

export const MobileMinimap = () => {
    return (
        <div className="mobile-minimap">
            <Minimap highlightYear={2020} highlightSpan={100} />
        </div>
    )
}