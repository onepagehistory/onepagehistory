import { Link } from "react-router-dom";
import React from 'react';
import { HistoryEntry } from '../data/History';
import { Rectangle, ISizes } from '../shared/types';
import './Card.scss';


export const Card = ({ entry, cardPosition, rangePosition, isSelected, sizes, sizeId }: { entry: HistoryEntry; cardPosition: Rectangle, rangePosition: Rectangle, isSelected: boolean; sizes: ISizes; sizeId: string }) => {
    const SUBPAGE_URL = '/p/' + entry.name + '/'; // trailing / is canonical url

    // NOTE: file-loader is used here exclusively to force loader to use file
    // urls instead of base64 data.
    let localImageSrc1x = require(`!file-loader?{ outputPath: 'static' }!./../data/entries/img/${entry.name}@1x.png`);
    let localImageSrc2x = require(`!file-loader?{ outputPath: 'static' }!./../data/entries/img/${entry.name}@2x.png`);
    let localImageSrc3x = require(`!file-loader?{ outputPath: 'static' }!./../data/entries/img/${entry.name}@3x.png`);

    return (
        <div
            id={entry.name}
            className={
                'Card'
                + (isSelected ? ' Card--selected' : '' )
                + ` Card--size-${sizeId}`
            }
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
                                src={localImageSrc1x || entry.imageUrl}
                                srcSet={`${localImageSrc1x} 1x, ${localImageSrc2x} 2x, ${localImageSrc3x} 3x,`}
                            />
                    }</Link>
                    <div className="Card__Summary">
                        <Link className="Card__Head" to={SUBPAGE_URL}>
                            <h3 className="Card__Title">{entry.title}</h3>
                            <p className="Card__sub-title">{entry.subtitle}</p>
                        </Link>

                        {
                            entry.short &&
                            <p className="Card__Description"
                                style={{
                                    width: sizes.descriptionWidth
                                }}
                            >{entry.short}</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}