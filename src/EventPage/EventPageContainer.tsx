import React from 'react';
import { useRouteData } from 'react-static'
import { RootPage } from '../RootPage/RootPage';
import { EventPage } from './EventPage';
import { IPageData } from './IPageData';

export default ()=> {
    const pageData: IPageData = useRouteData();

    return (
        <RootPage>
            <EventPage pageData={pageData}/>
        </RootPage>
    );
};