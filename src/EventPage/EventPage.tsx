import React from 'react';
import './EventPage.css';
import { Link } from '@reach/router';
import { EventDescription }  from './Markdown/EventDescription'
import { IPageData } from './IPageData';

export const EventPage = (props: { pageData: IPageData })=> {
    const { entry, content } = props.pageData;

    return (
        <div className="EventPage">
            <Link className="EventPage__Close" to="/">&times;</Link>
            <h1>
                { entry.title }
                &nbsp;
                <a
                    target="_blank"
                    href={ `https://github.com/onepagehistory/onepagehistory/tree/dev/src/data/entries/${ entry.name }.md` }
                >edit</a>
            </h1>
            <h6>{entry.subtitle}</h6>
            <EventDescription value={content}/>
            <a target="_blank" href={ entry.wikiUrl }>[wikipedia]</a>
        </div>
    )
};