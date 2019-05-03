import React from 'react';
import { HistoryEntry } from '../data';
import { getTopPos as getLeftPos } from '../shared/yearToTopPos';
import './Card.css';
import { Link } from '@reach/router';
import { SCALE } from '../shared/const';


export const Card = ({ depth, bubble, entry, baseRowLength }: { depth: number, bubble: number, entry: HistoryEntry, baseRowLength: number }) => {
    const eventWidth = Math.max(1, entry.dating.to.year() - entry.dating.from.year()) * SCALE;

    const ROW_HEIGHT = 8;

    const leftPos = getLeftPos(entry.dating.to.year());
    const bottomBase = (0.5 + depth) * ROW_HEIGHT;
    const bubbleHeight = (baseRowLength - depth) * ROW_HEIGHT + 40 + (bubble * (80 + 10));

    return (
        <div
            id={entry.name}
            className="Card"
        >
            <div className="Card__Range" style={
                { left: leftPos
                , bottom: bottomBase 
                , width: eventWidth
                }
            }></div>

            <div className="Card__DashedLine" style={
                { height: bubbleHeight
                , left: leftPos
                , bottom: bottomBase 
                }
            }></div>

            <div className="Card__Entry" style={
                { bottom: bottomBase + bubbleHeight
                , left: leftPos
                }
            }>
                <div className="Card__Box">
                    <div
                        className="Card__ImgWrapper"
                    >{
                            <img
                                className="Card__image"
                                alt={entry.name + ' representation'}
                                src={entry.imageUrl}
                            />
                    }</div>
                    <Link className="Card__Summary" to={'/p/' + entry.name}>
                        <h3 className="Card__Title">{entry.title}</h3>
                        <div className="Card__Date">{entry.subtitle}</div>
                        {
                            entry.shortDescription &&
                            <div className="Card__Description">{entry.shortDescription}</div>
                    }
                    </Link>
                </div>
            </div>
        </div>
    );
}