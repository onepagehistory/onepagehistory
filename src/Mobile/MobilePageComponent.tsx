import * as React from 'react';
import { CardLine } from '../CardLine/CardLine';
import { useSiteData } from 'react-static';
import { MobileMinimap } from './Minimap/MobileMinimap';
import { MobileDecades } from './Decades/MobileDecades';
import './MobilePageComponent.scss';

export const MobilePageComponent = (props: any) => {
    const { data } = useSiteData();
    const { cards } = data;

    return <div className="mobile-page">
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
                <MobileMinimap cards={cards} />
            </div>
        </div>
    </div>
}