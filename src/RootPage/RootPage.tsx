import React from 'react'
import { Scales } from '../Scales/Scales';
import { CURRENT_YEAR } from '../shared/currentYear';
import './RootPage.css'
import { useSiteData } from 'react-static';

export const RootPage = (props) => {
    const { historyData } = useSiteData();

    return (
        <section className="RootPage">
            { props.children && (
                <div className="RootPage__Subpage">
                    { props.children }
                </div>
            ) }

            <div className="RootPage__Contents">
                {/* <header className="RootPage__Header">
                    <Search />
                </header> */}
                <section className="RootPage__Body">
                    <div className="RootPage__Scales">
                        <Scales
                            data={historyData}
                            from={ Math.min(...historyData.entries.map(e=>e.to)) }
                            to={CURRENT_YEAR}
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
