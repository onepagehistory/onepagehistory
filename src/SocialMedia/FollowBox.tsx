import React from 'react';
import { FacebookIcon, TwitterIcon } from './icons';
import './SocialMedia.scss';
import { ExternalLink } from '../shared/ExternalLink';

export function FollowBox() {
    return (
        <div className="Share-box">
            <p className="Share-box__text">Follow us:</p>
            <div>
                <ExternalLink href="https://www.facebook.com/rostkubinets">
                    <FacebookIcon className="Share-box__icon" />
                </ExternalLink>

                <ExternalLink target="_blank" href="https://twitter.com/RKubinets">
                    <TwitterIcon className="Share-box__icon" />
                </ExternalLink>
            </div>
        </div>
    )
}
