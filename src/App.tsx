import React from 'react'
import { Root, Routes } from 'react-static'
import { Switch, Route } from 'react-router-dom'
import { RootPage } from './RootPage/RootPage';
import './index.scss'
import EventPageContainer from './EventPage/EventPageContainer';

const TheRoutes = ()=> <Routes path="*" />;

function App() {

    return (
        <Root>
            <React.Suspense fallback={<em>Loading...</em>}>
                <Switch>
                    <Route default component={ TheRoutes } />
                    <Route path="/" component={TheRoutes} />
                </Switch>
            </React.Suspense>
        </Root>
    )
}

export default App
