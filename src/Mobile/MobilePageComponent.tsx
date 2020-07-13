import React, { useRef } from 'react';
import { CardLine } from '../CardLine/CardLine';
import { useSiteData, useRouteData } from 'react-static';
import { MobileMinimap } from './Minimap/MobileMinimap';
import { MobileDecades } from './Decades/MobileDecades';
import './MobilePageComponent.scss';
import EventPageContainer from '../EventPage/EventPageContainer';

export const MobilePageComponent = (props: any) => {
    const { data } = useSiteData();

    // page id from the page data
    const routeData = useRouteData();
    const pageId = routeData && routeData.entry && routeData.entry.name || void 0;

    const ref = useRef(null);
    const { cards } = data.cardChart;

    return <div ref={ ref } className="mobile-page">

        { pageId
        ? <div className="mobile-page__subpage"><EventPageContainer /></div>
        : null
        }

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