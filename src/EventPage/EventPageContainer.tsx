import React, { useEffect } from 'react';
import { useRouteData } from 'react-static'
import { EventPage } from './EventPage';
import { IPageData } from './IPageData';


export default ()=> {
    const pageData: IPageData = useRouteData();

    useEffect(() => {
        const windowWidth = window.innerWidth;
        // 33% is the width of the sidepanel
        const halfOfVisibleScreen = ((windowWidth * 0.77) / 2);
        const scrollLeft = pageData.entry['cardPosition'].x - halfOfVisibleScreen;
        window.scrollTo({ left: scrollLeft });
    });

    return <EventPage pageData={pageData} />
}
