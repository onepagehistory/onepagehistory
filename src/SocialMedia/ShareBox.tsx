import React, { useCallback } from 'react';
import { ROOT_URL } from '../shared/const.js';
import { ExternalLink } from '../shared/ExternalLink';
import { FacebookIcon, TwitterIcon } from './icons';
import './SocialMedia.scss';

declare let FB: any;

export function ShareBox(props: { pageTitle: string, relativeUrl: string }) {
    const facebookShare = useCallback(function facebookShare() {
        FB.ui({
            method: 'share',
            href: ROOT_URL + props.relativeUrl
        }, function () { });
    }, [props.relativeUrl]);

    const twitterShareText = encodeURIComponent(`${props.pageTitle}\n${ROOT_URL + props.relativeUrl}`);

    return(
        <div className="Share-box">
            <p className="Share-box__text">Share:</p>
            <div>
                <span onClick={facebookShare}>
                    <FacebookIcon className="Share-box__icon" />
                </span>

                <ExternalLink target="_blank" rel="nofollow" href={'https://twitter.com/intent/tweet?text=' + twitterShareText}>
                    <TwitterIcon className="Share-box__icon" />
                </ExternalLink>
            </div>
        </div>
    )
}
