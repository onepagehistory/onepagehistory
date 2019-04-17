import React from 'react';
import { useRouteData } from 'react-static'
import { HistoryEntry } from '../data';
import { RootPage } from '../RootPage/RootPage';
import { EventPage } from './EventPage';

export default ()=> {
    const { entry }: { entry: HistoryEntry } = useRouteData()

    return (
        <RootPage>
            <EventPage entry={entry}/>
        </RootPage>
    );
};