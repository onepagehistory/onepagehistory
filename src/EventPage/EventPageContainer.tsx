import React, { useEffect } from 'react';
import { useRouteData } from 'react-static'
import { EventPage } from './EventPage';
import { IPageData } from './IPageData';
import { CARD_WIDTH, YEAR_LENGTH } from '../shared/const.js';


export default ()=> {
    const pageData: IPageData = useRouteData();

    /**
     * Scroll element into view
     * ____________________________
     * |xxx|                |xxxxx|
     * |xxx|                |xxxxx|
     * |xxx|       OK       |xxxxx|
     * |xxx|                |xxxxx|
     * |3yr|                | 34% |
     * */
    useEffect(() => {
        const windowWidth = window.innerWidth;
        const windowScrollX = window.scrollX;
        const elementX = pageData.entry['cardPosition'].x;
        const xDiff = elementX - windowScrollX;
        // arbitrary margin from the left
        const LEFT_MARGIN = YEAR_LENGTH * 3;
        // 33% is the width of the sidepanel + a small margin
        const RIGHT_MARGIN = windowWidth * 0.333 + CARD_WIDTH + 30;
        if (xDiff > LEFT_MARGIN && xDiff < windowWidth - RIGHT_MARGIN) {
            return;
        }

        let scrollLeft = 0;

        if (xDiff <= LEFT_MARGIN) {
            scrollLeft =  elementX - LEFT_MARGIN;
        } else {
            scrollLeft =  elementX - (windowWidth - RIGHT_MARGIN);
        }

        window.scrollTo({ left: scrollLeft });
    });

    return <EventPage pageData={pageData} />
}
