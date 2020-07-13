import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from "react-router-dom";
import { Head } from 'react-static';
import { ShareBox } from '../SocialMedia/ShareBox';
import './EventPage.scss';
import { IPageData } from './IPageData';

export const EventPage = (props: { pageData: IPageData }) => {
    const { entry, content } = props.pageData;

    return (
        <div className="EventPage">
            <Head>
                <title>{entry.title} on World History Page</title>
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
                        className="EventPage__Edit"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18px" height="18px">
                            <path d="M 18.414062 2 C 18.158188 2 17.902031 2.0974687 17.707031 2.2929688 L 16 4 L 20 8 L 21.707031 6.2929688 C 22.098031 5.9019687 22.098031 5.2689063 21.707031 4.8789062 L 19.121094 2.2929688 C 18.925594 2.0974687 18.669937 2 18.414062 2 z M 14.5 5.5 L 3 17 L 3 21 L 7 21 L 18.5 9.5 L 14.5 5.5 z"/>
                        </svg>
                    </a>
                </h1>
                <h3 className="EventPage__sub-title">{entry.subtitle}</h3>
            </div>

            <ShareBox
                pageTitle={entry.title}
                relativeUrl={'/p/' + entry.name}
                />

            <div className="EventPage__description" >
                <ReactMarkdown source={content} />
            </div>

            <a target="_blank" href={ entry.wikiUrl } className="wikilink">
                Read full article on Wikipedia
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18px" height="18px" fill="#fff">
                    <path d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 5 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z"/>
                </svg>
            </a>
        </div>
    )
};