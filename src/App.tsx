import React, { Component } from 'react';
import { Card } from './Card/Card';
import { Search } from './Search/Search';
import { data } from './data';
import { Scales } from './Scales/Scales';
import Head from 'next/head';
import './App.scss';

class App extends Component<any, any> {
  render() {
    return (
      <div className="App">
        <Head>
            <meta charSet="UTF-8" />
            <title>One Page History</title>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=yes" />
            <base  href="/" />
            {/* manifest.json provides metadata used when your web app is added to the
            homescreen on Android. See https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/ */}
            <link rel="manifest" href="/static/manifest.json" />
            <link rel="shortcut icon" href="/static/favicon.ico"></link>
        </Head>
        <header className="App__Header">
            <Search />
        </header>
        <section className="App__Body">
            <div className="App__Events">{
                data.entries.filter(entry=>entry.name).map(entry=>
                    <Card
                        key={entry.name}
                        entry={entry}
                    />
                )
            }</div>
            <div className="App__Scales">
                <Scales from={-33100} to={2050}/>
            </div>
        </section>
      </div>
    );
  }
}

export default App;
