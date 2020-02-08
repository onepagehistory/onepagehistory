import React from 'react';
import path from 'path'
import { data } from './src/data/';

export default {
    entry: 'index.tsx',

    getSiteData: ()=>{
        return { data }
    },

    getRoutes: () => {
        return [
            ...Object.keys(data.events)
                .map(eventId => ({
                    path: `/p/${eventId}/`,
                    template: 'src/RootPage/RootPage',
                    getData: () => ({ // () => IPageData
                        entry: data.events[eventId],
                        content: data.events[eventId].content
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
                    <meta name="description" content="See the most significant historic events on a single page: groundbreaking inventions, famous people, and matters that changed our culture" />
                    <link rel="icon" href="favicon.ico" type="image/x-icon" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />

                    { /* TODO: use prod url */}
                    <meta property="og:image" content="https://stg1.worldhistory.page/ogimage.jpg" />

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
                            <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
                            <script async={true} src="/autotrack.js" />
                            <script src="/FB.js" />
                            <script async defer src="https://connect.facebook.net/en_US/sdk.js"></script>
                        </React.Fragment>
                        /* GOOGLE ANALYTICS }}} */
                    }
                </Head>
                <Body>
                    { children }
                    <script src="/GA.js" />
                    
                </Body>
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
        require.resolve('react-static-plugin-sass'),
        require.resolve('react-static-plugin-react-router'),
        require.resolve('react-static-plugin-sitemap'),
    ],
}
