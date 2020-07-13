import * as React from 'react';
import { useSiteData } from 'react-static';
import { YEAR_LENGTH } from '../const';
import { EVENT_HEIGHT, PADDING } from './const';
import './Minimap.scss';
import { MinimapEvents } from './MinimapEvents';

interface IProps {
    highlightYear: number;
    highlightSpan: number;
}

export const Minimap = (props: IProps) => {
    const { highlightYear, highlightSpan } = props;
    const { data } = useSiteData();
    const { from, to, barChart } = data;
    const length = to - from;

    const highlightWidth   = highlightSpan / (length / 100);
    const hightlightOffset = (to - highlightYear) / (length / 100);
    const hightLightLeft   = hightlightOffset;
    const hightLightRight  = 100 - (hightlightOffset + highlightWidth);

    // scroll to click
    const onClick = React.useCallback((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const scrollX = event.clientX / window.innerWidth * ((length - highlightSpan) * YEAR_LENGTH);
        window.scrollTo({ left: scrollX });
        return void 0;
    }, []);

    return (
        <div onClick={onClick} className="minimap" style={{ height: barChart.maxRow * EVENT_HEIGHT + PADDING * 2 }}>
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