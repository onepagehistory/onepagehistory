import React from 'react';
import { Link, Switch, Router, Route } from 'react-router-dom';
import { useRouteData, useSiteData, Head, Routes } from 'react-static';
import { TimelineContainer } from './Timeline/TimelineContainer';
import { SocialMedia } from '../SocialMedia/SocialMedia';
import './DesktopPageComponent.scss';


export const DesktopPageComponent = (props) => {
    const { data } = useSiteData();

    console.log(data);

    // page id from the page data
    const routeData = useRouteData();
    const pageId = routeData && routeData.entry && routeData.entry.name || void 0;

    function logoClick(){
        return window.scrollTo(0,0);
    }

    return (
        <section className="root-page">
            <Head>
                <title>World History Page</title>
                <meta name="description" content="See the most significant historic events on a single page: groundbreaking inventions, famous people, and matters that changed our culture" />
            </Head>

            <Switch>
                <Route exact path="/p/:pageId" component={() => <Routes path="/p/*" />} />
            </Switch>

            <div className="root-page__contents">
                <section>
                    <Link to="/" className="logo" onClick={logoClick}>
                        <svg width="60" height="28" viewBox="0 0 60 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M36.7236 0H41.5221L31.7704 27.5524H27.7072L20.7804 7.73944L13.7762 27.5524H9.713L0 0H5.06933L11.9574 20.5482L19.1164 0H22.6766L29.6808 20.703L36.7236 0Z" fill="white"/>
                            <path d="M54.7611 0H59.7143V27.5524H54.7611V15.595H40.6366L42.249 11.5318H54.7611V0Z" fill="white"/>
                        </svg>
                        <p className="logo__name">
                            World History <br/>
                            Educational project
                        </p>
                    </Link>
                    <TimelineContainer
                        data={data}
                        selectedId={pageId}
                    />

                    {/* TODO: remove this when all rights will be resolved and before going public */}
                    {/* <div className="RootPage__Disclaimer">
                        <p>
                            <b>THIS WEBSITE IS CURRENTLY WORKING IN TEST MODE</b>
                        </p>
                        <p>
                            MOST OF THE DATA AND IMAGES REFLECT THOSE PRESENTED AT
                            RELEVANT WIKIPEDIA.ORG PAGES AND MIGHT HAVE SPECIFIC
                            DISTRIBUTION CONDITIONS. SEE RELEVANT WIKIPEDIA.ORG PAGE
                            FOR DETAILS
                        </p>
                    </div> */}
                </section>
                <div className="social-media-box">
                    <SocialMedia
                        title="Follow us:"
                        follow={true}
                        relativeUrl="/"
                        />
                </div>
            </div>
        </section>
    )
}

