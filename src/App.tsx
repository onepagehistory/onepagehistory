import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Root, Routes } from 'react-static';
import './index.scss';

const TheRoutes = () => <Routes path="*" />;

function App() {

    return (
        <Root>
            <React.Suspense fallback={<em>Loading...</em>}>
                <Switch>
                    <Route default  component={TheRoutes} />
                    <Route path="/" component={TheRoutes} />
                </Switch>
            </React.Suspense>
        </Root>
    )
}

export default App
