import React from 'react';
import { Link } from "react-router-dom";
import { Head } from 'react-static';
import { SocialMedia } from '../SocialMedia/SocialMedia';
import { IPageData } from './IPageData';
import { EventDescription } from './Markdown/EventDescription';
import './EventPage.scss';

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

            {/* <div className="Share-box">
                <p className="Share-box__text">Share:</p>
                <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?">
                    <svg className="Share-box__icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.5 0H2.5C1.12125 0 0 1.12125 0 2.5V17.5C0 18.8787 1.12125 20 2.5 20H10V13.125H7.5V10H10V7.5C10 5.42875 11.6788 3.75 13.75 3.75H16.25V6.875H15C14.31 6.875 13.75 6.81 13.75 7.5V10H16.875L15.625 13.125H13.75V20H17.5C18.8787 20 20 18.8787 20 17.5V2.5C20 1.12125 18.8787 0 17.5 0Z" fill="white"/>
                    </svg>
                </a>
                <a target="_blank" href={`https://twitter.com/intent/tweet?text=Look+what+I+found+out+here&url=https%3A%2F%2Fstg1.worldhistory.page%2Fp%2F${ entry.name }`}>
                    <svg className="Share-box__icon" width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.3333 2.79875C19.5895 3.125 18.797 3.34125 17.9708 3.44625C18.8208 2.93875 19.4695 2.14125 19.7745 1.18C18.982 1.6525 18.107 1.98625 17.1745 2.1725C16.422 1.37125 15.3495 0.875 14.1795 0.875C11.9095 0.875 10.082 2.7175 10.082 4.97625C10.082 5.30125 10.1095 5.61375 10.177 5.91125C6.76825 5.745 3.752 4.11125 1.72575 1.6225C1.372 2.23625 1.1645 2.93875 1.1645 3.695C1.1645 5.115 1.89575 6.37375 2.98575 7.1025C2.327 7.09 1.68075 6.89875 1.13325 6.5975C1.13325 6.61 1.13325 6.62625 1.13325 6.6425C1.13325 8.635 2.5545 10.29 4.41825 10.6712C4.0845 10.7625 3.72075 10.8062 3.34325 10.8062C3.08075 10.8062 2.81575 10.7913 2.567 10.7362C3.09825 12.36 4.60575 13.5538 6.39825 13.5925C5.00325 14.6838 3.232 15.3412 1.3145 15.3412C0.978252 15.3412 0.655752 15.3263 0.333252 15.285C2.1495 16.4563 4.302 17.125 6.62325 17.125C14.1683 17.125 18.2933 10.875 18.2933 5.4575C18.2933 5.27625 18.287 5.10125 18.2783 4.9275C19.092 4.35 19.7758 3.62875 20.3333 2.79875Z" fill="white"/>
                    </svg>
                </a>
            </div> */}
            <SocialMedia
                title="Share:"
                follow={false}
                relativeUrl={ '/p/' + entry.name }
                />

            <EventDescription value={content}/>
            <a target="_blank" href={ entry.wikiUrl } className="wikilink">
                Read full article on Wikipedia
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18px" height="18px" fill="#fff">
                    <path d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 5 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z"/>
                </svg>
            </a>
        </div>
    )
};