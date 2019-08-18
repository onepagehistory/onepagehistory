import React from 'react'
import { Root, Routes } from 'react-static'
import { Switch, Route } from 'react-router-dom'
import { RootPage } from './RootPage/RootPage';
import './index.css'
import EventPageContainer from './EventPage/EventPageContainer';

const TheRoutes = ()=> <Routes path="*" />;

function App() {

    return (
        <Root>
            <React.Suspense fallback={<em>Loading...</em>}>
                <Switch>
                    <Route exact path="/" component={TheRoutes} />
                    <Route exact path="/p/:pageId" component={TheRoutes} />
                    <Route default component={ TheRoutes } />
                </Switch>
            </React.Suspense>
        </Root>
    )
}

export default App
