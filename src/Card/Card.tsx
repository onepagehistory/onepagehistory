import { Link } from '@reach/router';
import React from 'react';
import { HistoryEntry } from '../data/History';
import { Rectangle } from '../shared/types';
import './Card.css';


export const Card = ({ entry }: { entry: HistoryEntry }) => {
    const cardPosition: Rectangle = entry['cardPosition'];
    const rangePosition: Rectangle = entry['yearPosition'];

    return (
        <div
            id={entry.name}
            className="Card"
        >
            <div className="Card__Range" style={
                { left: rangePosition.x
                , bottom: rangePosition.y
                , width: rangePosition.width
                , height: rangePosition.height
                }
            }></div>

            <div className="Card__Entry" style={
                { left: cardPosition.x
                , bottom: cardPosition.y
                , width: cardPosition.width
                , height: cardPosition.height
                }
            }>
                <div className="Card__Box">
                    <Link
                        to={'/p/' + entry.name}
                        className="Card__ImgWrapper"
                    >{
                            <img
                                className="Card__image"
                                alt={entry.name + ' representation'}
                                src={entry.imageUrl}
                            />
                    }</Link>
                    <div className="Card__Summary">
                        <h2 className="Card__Title">
                            <Link to={'/p/' + entry.name}>{
                                entry.title
                            }</Link>
                        </h2>
                        <div className="Card__Date">{entry.subtitle}</div>
                        {
                            entry.short &&
                            <div className="Card__Description">{entry.short}</div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}