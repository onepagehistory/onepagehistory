import React, { useState, useEffect, Ref, MutableRefObject } from 'react';
import { Minimap } from '../../shared/Minimap';
import { CURRENT_YEAR, YEAR_LENGTH } from '../../shared/const';
import { useSiteData } from 'react-static';
import './MobileMinimap.scss';

const DEFAULT_YEAR = CURRENT_YEAR;
const DEFAULT_SPAN = 30;

export const MobileMinimap = (props: { scrollElementRef: MutableRefObject<HTMLElement> }) => {
    const { scrollElementRef } = props;
    const [year, setYear] = useState(DEFAULT_YEAR);
    const [span, setSpan] = useState(DEFAULT_SPAN);
    const { data } = useSiteData();
    const { from, to } = data;
    const length = to - from;

    useEffect(() => {
        if (!scrollElementRef.current) return;

        const scrollElement = scrollElementRef.current;
        const scrollWidth = scrollElement.scrollWidth;

        // TODO: use a throttle to limit scroll reactions
        function onScroll() {
            const yearOffset = to - (length * scrollElement.scrollLeft / scrollWidth);
            setYear(yearOffset);
        }

        function onResize () {
            const yearSpan = Math.floor(window.innerWidth / YEAR_LENGTH);
            setSpan(yearSpan);
        }

        scrollElement.addEventListener('scroll', onScroll);
        window.addEventListener('resize', onResize)

        onScroll();
        onResize();

        return () => {
            scrollElement.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onResize);
        }
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