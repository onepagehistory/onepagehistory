import React from 'react';
import './EventPage.css';
import { HistoryEntry } from 'src/data';
import { Link } from '@reach/router';
import { EventDescription }  from '../Markdown/EventDescription'

export const EventPage = (props: { entry: HistoryEntry })=> {
    const { entry } = props;
    return (
        <div className="EventPage">
            <Link className="EventPage__Close" to="/">&times;</Link>
            <h1>{entry.title}</h1>
            <h6>{entry.subtitle}</h6>
            <p>{entry.shortDescription}</p>
            <a target="_blank" href={'https://wikipedia.org/wiki/' + entry.name}>[Wikipedia]</a>
            <EventDescription value={entry.longDescription}/>
        </div>
    )
};