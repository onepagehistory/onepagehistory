import * as React from 'react';
import { Link } from 'react-router-dom';
import './PrelaunchLanding.css';

export const PrelaunchLanding = () => {
    return (
        <div className="PrelaunchLanding">
            <header>
                <b>Prelaunch</b> | <a style={{ color: 'white' }} href="/timeline">timeline</a>
            </header>
        </div>
    )
}