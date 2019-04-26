import React from 'react';
import path from 'path'
import { data as historyData } from './src/data/index.js';
import * as fs from 'fs';

export default {
    entry: 'index.tsx',

    getSiteData: ()=>{
        return {
            historyData
        }
    },

    getRoutes: () => {
        const SUBPAGES_FOLDER_PATH = './src/data/subpages';

        return [
            ...historyData.entries
                .filter(e => e.name)
                .map(entry => ({
                    path: `/p/${entry.name}`,
                    template: 'src/EventPage/EventPageContainer',
                    getData: () => ({ // () => IPageData
                        entry,
                        content: fs.readFileSync(path.resolve(SUBPAGES_FOLDER_PATH, entry.name.toLowerCase() + '.md'), 'utf8')
                    }),
                }))
        ];
    },

    Document: ({ Html, Head, Body, children }) => {
        return (
            <Html lang="en-US">
                <Head>
                    <meta charSet="UTF-8" />
                    <title>World History Page</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=yes" />
                    <base href="/" />
                    {/*
                      manifest.json provides metadata used when your web app is added to the
                      homescreen on Android. See https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/
                    */}
                    <link rel="manifest" href="/manifest.json" />
                    <link rel="shortcut icon" href="/favicon.ico"></link>

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
                <Body>{children}</Body>
            </Html>
        )
    },

    plugins: [
        'react-static-plugin-typescript',
        [
            require.resolve('react-static-plugin-source-filesystem'),
            {
                location: path.resolve('./src/pages'),
            },
        ],
        require.resolve('react-static-plugin-reach-router'),
        require.resolve('react-static-plugin-sitemap'),
    ],
}
