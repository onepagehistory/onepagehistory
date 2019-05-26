import React from 'react';
import './EventPage.css';
import { Link } from "react-router-dom";
import { EventDescription }  from './Markdown/EventDescription'
import { IPageData } from './IPageData';
import { Head } from 'react-static';

export const EventPage = (props: { pageData: IPageData }) => {
    const { entry, content } = props.pageData;

    return (
        <div className="EventPage">
            <Head>
                <title>{entry.title}</title>
                <meta name="description" content={ entry.short } />
            </Head>
            <Link className="EventPage__Close" to="/">&times;</Link>
            <div className="EventPage__head">
                <h1 className="EventPage__title">
                    { entry.title }
                    &nbsp;
                    <a
                        target="_blank"
                        href={ `https://github.com/onepagehistory/onepagehistory/tree/dev/src/data/entries/${ entry.name }.md` }
                    >edit</a>
                </h1>
                <h3 className="EventPage__sub-title">{entry.subtitle}</h3>
            </div>

            <EventDescription value={content}/>
            <a target="_blank" href={ entry.wikiUrl } className="wikilink">[wikipedia]</a>
        </div>
    )
};