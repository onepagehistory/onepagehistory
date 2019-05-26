import { Link } from "react-router-dom";
import React from 'react';
import { HistoryEntry } from '../data/History';
import { Rectangle } from '../shared/types';
import './Card.css';


export const Card = ({ entry, isSelected }: { entry: HistoryEntry, isSelected: boolean }) => {
    const cardPosition: Rectangle = entry['cardPosition'];
    const rangePosition: Rectangle = entry['yearPosition'];

    return (
        <div
            id={entry.name}
            className={ 'Card' + (isSelected ? ' Card--selected' : '' ) }
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
                        <Link className="Card__Head" to={'/p/' + entry.name}>
                            <h3 className="Card__Title">{entry.title}</h3>
                            <p className="Card__sub-title">{entry.subtitle}</p>
                        </Link>

                        {
                            entry.short &&
                            <p className="Card__Description">{entry.short}</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}