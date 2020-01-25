import React, { useRef } from 'react';
import { CardLine } from '../CardLine/CardLine';
import { useSiteData } from 'react-static';
import { MobileMinimap } from './Minimap/MobileMinimap';
import { MobileDecades } from './Decades/MobileDecades';
import './MobilePageComponent.scss';

export const MobilePageComponent = (props: any) => {
    const { data } = useSiteData();
    const ref = useRef(null);
    const { cards } = data;

    return <div ref={ ref } className="mobile-page">
        <div className="mobile-page__card-line">

            <div className="mobile-page__decades">
                <MobileDecades />
            </div>

            <CardLine
                cards={cards}
                />
        </div>
        <div className="mobile-page__minimap">
            <div className="mobile-page__minimap-wrapper">
                <MobileMinimap scrollElementRef={ ref }  />
            </div>
        </div>
    </div>
}