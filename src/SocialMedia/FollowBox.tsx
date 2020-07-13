import React from 'react';
import { FacebookIcon, TwitterIcon } from './icons';
import './SocialMedia.scss';

export function FollowBox() {
    return (
        <div className="Share-box">
            <p className="Share-box__text">Follow us:</p>
            <div>
                <a target="_blank" href="https://www.facebook.com/rostkubinets">
                    <FacebookIcon className="Share-box__icon" />
                </a>
                <a target="_blank" href="https://twitter.com/RKubinets">
                    <TwitterIcon className="Share-box__icon" />
                </a>
            </div>
        </div>
    )
}
