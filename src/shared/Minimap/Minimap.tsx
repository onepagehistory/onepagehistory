import * as React from 'react';
import { MinimapEvents } from './MinimapEvents';
import { useSiteData } from 'react-static';
import './Minimap.scss';

interface IProps {
    highlightYear: number;
    highlightSpan: number;
}

export const Minimap = (props: IProps) => {
    const { highlightYear, highlightSpan } = props;
    const { data } = useSiteData();
    const { from, to } = data;
    const length = to - from;

    const highlightWidth   = highlightSpan / (length / 100);
    const hightlightOffset = (to - highlightYear) / (length / 100);
    const hightLightLeft   = hightlightOffset;
    const hightLightRight  = 100 - (hightlightOffset + highlightWidth);

    return (
        <div className="minimap">
            <div className="minimap__events">
                <MinimapEvents />
            </div>
            <div
                className="minimap__hightlighted-wrapper"
                style={
                    {
                        left: hightLightLeft + '%',
                        right: hightLightRight + '%'
                    }
                }
            >
                <div
                    className="minimap__hightlighted"
                    style={
                        {
                            left:  ('-' + hightLightLeft * (100 / highlightWidth)  + '%'),
                            right: ('-' + hightLightRight * (100 / highlightWidth) + '%')
                        }
                    }
                >
                    <MinimapEvents />
                </div>
            </div>
        </div>
    )
}