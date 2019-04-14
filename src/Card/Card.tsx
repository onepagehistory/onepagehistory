import React from 'react';
import { HistoryEntry } from '../data';
import './Card.scss';
import { getTopPos } from '../shared/yearToTopPos';


export const Card = ({ entry }: { entry: HistoryEntry }) => (
    <div
        id={entry.name}
        className="Card"
        style={{
            ...entry.position,
            top: entry.dating
                ? getTopPos(entry.dating.from)
                : entry.position.top
        }}
    >
        { entry.dating &&
            <div className="Card__Range" style={{
                height: Math.max(1, entry.dating.to.year() - entry.dating.from.year()) * 1.5,
                marginTop: -Math.max(1, entry.dating.to.year() - entry.dating.from.year()) * 1.5
            }}></div>
        }

        <div className="Card__Body">
            <h3 className="Card__Title"><a className="Card__TitleLink" href={'#' + entry.name }>{entry.title}</a> <a className="Card__WikiLink" target="_blank" href={'https://wikipedia.org/wiki/' + entry.name }>[W]</a></h3>
            <div className="Card__Date">{entry.subtitle}</div>
            <div className="Card__ShortDescription">{entry.shortDescription}</div>

            <div
                className="Card__ImgWrapper"
            ><img
                alt={entry.name + ' representation'}
                src={entry.imageUrl}
                /></div>
        </div>
    </div>
);