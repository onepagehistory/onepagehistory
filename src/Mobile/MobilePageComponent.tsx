import * as React from 'react';
import { CardLine } from '../CardLine/CardLine';
import { useSiteData } from 'react-static';
import { Minimap } from '../Desktop/Minimap/Minimap';

export const MobilePageComponent = (props: any) => {
    const { data } = useSiteData();
    const { cards } = data;

    return <div>
        <CardLine
        cards={cards}
        />
        {/* NOTE: this is a desktop minimap */}
        <Minimap cards={cards} />
    </div>
}