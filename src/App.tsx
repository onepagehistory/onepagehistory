import React, { Component } from 'react';
import { Search } from './Search/Search';
import { data } from './data';
import { Scales } from './Scales/Scales';
import Head from 'next/head';
import './App.scss';
import { CURRENT_YEAR } from './shared/currentYear';

class App extends Component<any, any> {
  render() {
    return (
      <div className="App">
        <Head>
            <meta charSet="UTF-8" />
            <title>World History Page</title>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=yes" />
            <base  href="/" />
            {/* manifest.json provides metadata used when your web app is added to the
            homescreen on Android. See https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/ */}
            <link rel="manifest" href="/static/manifest.json" />
            <link rel="shortcut icon" href="/static/favicon.ico"></link>

            { /** GOOGLE ANALYTICS {{{
                * NOTE: [kos] adding google analitics only for production
                *     would be nice to:
                *     - do not download ga script for dev at all
                *     - remove % NODE_ENV % reference from here
                */
                // !siteData.dev &&
                <React.Fragment>
                    <script async={true} src='https://www.google-analytics.com/analytics.js'></script>
                    <script async={true} src="/autotrack.js" />
                    <script src="/GA.js" />
                </React.Fragment>
              /* GOOGLE ANALYTICS }}} */
            }

        </Head>
        <header className="App__Header">
            <Search />
        </header>
        <section className="App__Body">
            <div className="App__Scales">
                <Scales
                    data={data}
                    from={ -33100 }
                    to={ CURRENT_YEAR }
                    />
            </div>

            {/* TODO: remove this when all rights will be resolved and before going public */}
            <div className="App__Disclaimer">
                <p>
                    <b>THIS WEBSITE IS CURRENTLY WORKING IN TEST MODE</b>
                </p>
                <p>
                    MOST OF THE DATA AND IMAGES REFLECT THOSE PRESENTED AT
                    RELEVANT WIKIPEDIA.ORG PAGES AND MIGHT HAVE SPECIFIC
                    DISTRIBUTION CONDITIONS. SEE RELEVANT WIKIPEDIA.ORG PAGE
                    FOR DETAILS
                </p>
            </div>
        </section>
      </div>
    );
  }
}

export default App;
