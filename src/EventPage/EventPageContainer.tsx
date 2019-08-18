import React, { useEffect } from 'react';
import { useRouteData } from 'react-static';
import { RootPage } from '../RootPage/RootPage';
import { CURRENT_YEAR, DEFAULT_CARD_WIDTH, DEFAULT_IMAGE_SIZE, YEAR_LENGTH } from '../shared/const.js';
import { EventPage } from './EventPage';
import { IPageData } from './IPageData';


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
        const elementX = (CURRENT_YEAR - pageData.entry.to) * YEAR_LENGTH;
        const xDiff = elementX - windowScrollX;
        // arbitrary margin from the left
        const LEFT_MARGIN = YEAR_LENGTH * 3;

        // 33% is the width of the sidepanel + a small margin
        const RIGHT_MARGIN = windowWidth * 0.333 + DEFAULT_CARD_WIDTH + 30;
        if (xDiff > LEFT_MARGIN && xDiff < windowWidth - RIGHT_MARGIN) {
            // card is inside of the screen center
            return;
        }

        let scrollLeft = 0;

        // is outside the screen completely
        if (xDiff < -DEFAULT_CARD_WIDTH || xDiff > windowWidth + DEFAULT_CARD_WIDTH) {
            // scroll to center of the screen
            scrollLeft = elementX - windowWidth * 0.333 + DEFAULT_IMAGE_SIZE / 2;
        }
        // is on the left, visible, just needs a bit of scroll
        else if (xDiff <= LEFT_MARGIN) {
            scrollLeft = elementX - LEFT_MARGIN;
        }
        // is on the right, visible, just needs a bit of scroll
        else {
            scrollLeft = elementX - (windowWidth - RIGHT_MARGIN);
        }

        window.scrollTo({ left: scrollLeft });
    });

    return <RootPage><EventPage pageData={pageData} /></RootPage>
}
