import * as React from 'react';
import { Link } from 'react-router-dom';
import './PrelaunchLanding.scss';

export const PrelaunchLanding = () => {
    return (
        <div className="prelaunch-landing">
            <header>
                <b>Prelaunch</b> | <a style={{ color: 'white' }} href="/timeline">timeline</a>
            </header>
        </div>
    )
}