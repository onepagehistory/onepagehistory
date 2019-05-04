import React from 'react';
import { HistoryEntry } from '../data/History';
import { getTopPos as getLeftPos } from '../shared/yearToTopPos';
import './Card.css';
import { Link } from '@reach/router';
import { SCALE } from '../shared/const';


export const Card = ({ depth, bubble, entry, baseRowLength }: { depth: number, bubble: number, entry: HistoryEntry, baseRowLength: number }) => {
    const eventWidth = Math.max(1, entry.to - entry.from) * SCALE;

    const ROW_HEIGHT = 8;

    const leftPos = getLeftPos(entry.to);
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