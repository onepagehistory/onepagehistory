import React from 'react';
import { HistoryEntry } from '../data';
import { getTopPos } from '../shared/yearToTopPos';
import './Card.css';
import { Link } from '@reach/router';


export const Card = ({ entry }: { entry: HistoryEntry }) => {
    const eventHeight = Math.max(1, entry.dating.to.year() - entry.dating.from.year()) * 1.5;

    const topPos = getTopPos(entry.dating.to.year());

    return (
        <div
            id={entry.name}
            className="Card"
        >
            <div className="Card__Range" style={{ top: topPos, height: eventHeight }}></div>

            <div className="Card__Entry" style={{
                ...entry.position,
                top: topPos
            }}>
                <div className="Card__Body">
                    <h3 className="Card__Title"><Link className="Card__TitleLink" to={`/p/${entry.name}/`}>{entry.title}</Link> <a className="Card__WikiLink" target="_blank" href={'https://wikipedia.org/wiki/' + entry.name}>[W]</a></h3>
                    <div className="Card__Date">{entry.subtitle}</div>
                    <div className="Card__ShortDescription">{entry.shortDescription}</div>
                </div>

                <div
                    className="Card__ImgWrapper"
                ><img
                    alt={entry.name + ' representation'}
                    src={entry.imageUrl}
                    /></div>
            </div>
        </div>
    );
}