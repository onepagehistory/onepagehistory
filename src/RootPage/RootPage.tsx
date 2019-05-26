import React from 'react'
import { useSiteData } from 'react-static';
import { ScalesContainer } from '../Scales/ScalesContainer';
import { Route } from 'react-router-dom'
import { Routes } from 'react-static'
import './RootPage.css'
import { NewLayout } from '../pages/new-layout-page'


export const RootPage = (props) => {
    const { historyData } = useSiteData();

    // page id from the react-router url match
    const pageId = props.match.params.pageId;

    return (
        <section className="RootPage">
            {/* <React.Suspense fallback={<em>Loading...</em>}> */}
                <Route path="/p/:id" render={() => <Routes path="/p/*"/> } />
            {/* </React.Suspense> */}

            <div className="RootPage__Contents">
                <section className="RootPage__Body">
                    <div className="logo">
                        <svg width="60" height="28" viewBox="0 0 60 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M36.7236 0H41.5221L31.7704 27.5524H27.7072L20.7804 7.73944L13.7762 27.5524H9.713L0 0H5.06933L11.9574 20.5482L19.1164 0H22.6766L29.6808 20.703L36.7236 0Z" fill="white"/>
                            <path d="M54.7611 0H59.7143V27.5524H54.7611V15.595H40.6366L42.249 11.5318H54.7611V0Z" fill="white"/>
                        </svg>
                        <p className="logo__name">
                            World History <br/>
                            Educational project
                        </p>


                    </div>
                    <div className="RootPage__Scales">
                        <ScalesContainer
                            data={historyData}
                            selectedId={pageId}
                        />
                    </div>

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
            </div>
        </section>
    )
}
