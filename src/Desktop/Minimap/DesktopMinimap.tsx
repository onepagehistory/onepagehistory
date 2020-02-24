import React, { useEffect, useState } from 'react';
import { Minimap } from '../../shared/Minimap/Minimap';
import { CURRENT_YEAR, YEAR_LENGTH } from '../../shared/const';
import { useSiteData } from 'react-static';
import './DesktopMinimap.scss';

const DEFAULT_YEAR = CURRENT_YEAR;
const DEFAULT_SPAN = 100;

export const DesktopMinimap = () => {
    const [year, setYear] = useState(DEFAULT_YEAR);
    const [span, setSpan] = useState(DEFAULT_SPAN);
    const { data } = useSiteData();
    const { from, to } = data;
    const length = to - from;

    useEffect(() => {
        const scrollWidth = window.document.body.scrollWidth;

        // TODO: use a throttle to limit scroll reactions
        function onScroll () {
            const yearOffset = to - (length * window.scrollX / scrollWidth);
            setYear(yearOffset);
        }

        function onResize () {
            const yearSpan = Math.floor(window.innerWidth / YEAR_LENGTH);
            setSpan(yearSpan);
        }

        window.addEventListener('scroll', onScroll);
        window.addEventListener('resize', onResize)

        onScroll();
        onResize();

        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onResize);
        }
    }, []);

    return <div className="desktop-minimap">
        <Minimap
            highlightYear={year}
            highlightSpan={span}
            />
    </div>
}