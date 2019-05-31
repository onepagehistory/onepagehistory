import { Link } from "react-router-dom";
import React from 'react';
import { HistoryEntry } from '../data/History';
import { Rectangle, ISizes } from '../shared/types';
import './Card.css';


export const Card = ({ entry, cardPosition, rangePosition, isSelected, sizes }: { entry: HistoryEntry; cardPosition: Rectangle, rangePosition: Rectangle, isSelected: boolean; sizes: ISizes }) => {
    const SUBPAGE_URL = '/p/' + entry.name + '/'; // trailing / is canonical url

    return (
        <div
            id={entry.name}
            className={ 'Card' + (isSelected ? ' Card--selected' : '' ) }
            title={ entry.title}
        >
            <Link
                to={SUBPAGE_URL}
                className="Card__Range"
                style={
                    { left: rangePosition.x
                    , bottom: rangePosition.y
                    , width: rangePosition.width
                    , height: rangePosition.height
                    }
                }></Link>

            <div className="Card__Entry" style={
                { left: cardPosition.x
                , bottom: cardPosition.y
                , width: cardPosition.width
                , height: cardPosition.height
                }
            }>
                <div
                    className="Card__Box"
                    style={ { height: sizes.cardHeight } }
                >
                    <Link
                        to={SUBPAGE_URL}
                        className="Card__ImgWrapper"
                        style={ { height: sizes.imageSize, width: sizes.imageSize } }
                    >{
                            <img
                                className="Card__image"
                                alt={entry.name + ' representation'}
                                src={entry.imageUrl}
                            />
                    }</Link>
                    <div className="Card__Summary">
                        <Link className="Card__Head" to={SUBPAGE_URL}>
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