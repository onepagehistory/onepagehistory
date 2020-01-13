import React, { useEffect, useState } from 'react';
import { Minimap } from '../../shared/Minimap/Minimap';
import { CURRENT_YEAR, YEAR_LENGTH } from '../../shared/const';
import { useSiteData } from 'react-static';

const defaultYear = CURRENT_YEAR;
const defaultSpan = 100;

export const DesktopMinimap = () => {
    const [year, setYear] = useState(defaultYear);
    const [span, setSpan] = useState(defaultSpan);
    const { data } = useSiteData();
    const { from, to } = data;
    const length = to - from;

    useEffect(() => {
        const scrollWidth = window.document.body.scrollWidth;

        // TODO: use a throttle to limit scroll reactions
        const onScroll = () => {
            const yearOffset = to - (length * window.scrollX / scrollWidth);
            setYear(yearOffset);
        }

        window.addEventListener('scroll', onScroll);

        setSpan(defaultSpan); // TODO: calculate it from inner width?
        onScroll();

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <Minimap
            highlightYear={year}
            highlightSpan={span}
            />
    )
}