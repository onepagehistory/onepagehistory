import React, { useState, useEffect, Ref, MutableRefObject } from 'react';
import { Minimap } from '../../shared/Minimap';
import { CURRENT_YEAR } from '../../shared/const';
import { useSiteData } from 'react-static';
import './MobileMinimap.scss';

const defaultYear = CURRENT_YEAR;
const defaultSpan = 30;

export const MobileMinimap = (props: { scrollElementRef: MutableRefObject<HTMLElement> }) => {
    const { scrollElementRef } = props;
    const [year, setYear] = useState(defaultYear);
    const [span, setSpan] = useState(defaultSpan);
    const { data } = useSiteData();
    const { from, to } = data;
    const length = to - from;

    useEffect(() => {
        if (!scrollElementRef.current) return;

        const scrollElement = scrollElementRef.current;
        const scrollWidth = scrollElement.scrollWidth;

        // TODO: use a throttle to limit scroll reactions
        const onScroll = () => {
            const yearOffset = to - (length * scrollElement.scrollLeft / scrollWidth);
            setYear(yearOffset);
        }

        scrollElement.addEventListener('scroll', onScroll);

        setSpan(defaultSpan); // TODO: calculate it from inner width?
        onScroll();

        return () => scrollElement.removeEventListener('scroll', onScroll);
    }, [ scrollElementRef.current ]);

    return (
        <div className="mobile-minimap">
            <div
                className="mobile-minimap__wrapper"
                style={{
                    width: 1000 + '%',
                    left: (50 - ((to - year + span / 2) / length) * 1000) + '%'
                }}
            >
                <Minimap
                    highlightYear={year}
                    highlightSpan={span}
                />
            </div>
        </div>
    )
}