import React from 'react'
import { useSiteData } from 'react-static';
import { ScalesContainer } from '../Scales/ScalesContainer';
import { Route } from 'react-router-dom'
import { Routes } from 'react-static'
import './RootPage.css'


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
