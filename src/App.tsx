import React from 'react'
import { Root, Routes } from 'react-static'
import { Switch, Route } from 'react-router-dom'
import { RootPage } from './RootPage/RootPage';
import './index.css'


function App() {
    return (
        <Root>
            <React.Suspense fallback={<em>Loading...</em>}>
                <Switch>
                    <Route exact path="/" component={RootPage} />
                    <Route exact path="/p/:pageId" component={RootPage} />
                    <Route path="/" render={ ()=> <Routes path="*" /> } />
                </Switch>
            </React.Suspense>
        </Root>
    )
}

export default App
