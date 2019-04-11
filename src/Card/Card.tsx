import React from 'react';
import { HistoryEntry } from '../data';
import './Card.scss';


export const Card = ({ entry }: { entry: HistoryEntry }) => (
    <div
        id={entry.name}
        className="Card"
        style={{
            position: 'absolute', ...entry.position,
            marginTop: '-128px'
        }}
    >
        <div className="Card__Body">
            <h3 className="Card__Title"><a className="Card__TitleLink" href={'#' + entry.name }>{entry.title}</a> <a className="Card__WikiLink" target="_blank" href={'https://wikipedia.org/wiki/' + entry.name }>[W]</a></h3>
            <div className="Card__Date">{entry.date}</div>
            <div className="Card__ShortDescription">{entry.shortDescription}</div>
        </div>
        <div
            className="Card__ImgWrapper"
        ><img src={entry.imageUrl} /></div>
    </div>
);