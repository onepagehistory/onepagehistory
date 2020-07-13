import { Link } from "react-router-dom";
import React from 'react';
import { IHistoryEvent } from "../data/HistoryEvent";
import { IChartCard } from "../data/plot-chart";
import { useSiteData } from "react-static";
import { YEAR_LENGTH, DEFAULT_CARD_WIDTH, CARD_HEIGHT_IN_ROWS } from '../shared/const.js'
import './Card.scss';

interface IProps {
    entry: IHistoryEvent;
    isSelected: boolean;
    card: IChartCard;
    minRow: number;
    maxRow: number;
}

export const Card = (props: IProps) => {
    const { entry, isSelected, card, minRow, maxRow  } = props;
    const SUBPAGE_URL = '/p/' + entry.name + '/'; // trailing / is a canonical url

    let imageUrl;
    let srcSet;
    if (entry.imageUrl) {
        imageUrl = entry.imageUrl;
        srcSet = null;
    } else {
        // NOTE: file-loader is used here exclusively to force loader to use file
        // urls instead of base64 data.
        const localImageSrc1x = require(`!file-loader?{ outputPath: 'static' }!./../data/entries/img/${entry.name}@1x.png`);
        const localImageSrc2x = require(`!file-loader?{ outputPath: 'static' }!./../data/entries/img/${entry.name}@2x.png`);
        const localImageSrc3x = require(`!file-loader?{ outputPath: 'static' }!./../data/entries/img/${entry.name}@3x.png`);

        imageUrl = localImageSrc1x;
        srcSet = `${localImageSrc1x} 1x, ${localImageSrc2x} 2x, ${localImageSrc3x} 3x`;
    }

    const { data } = useSiteData();
    const { to } = data;
    const rowHeight = 100 / (maxRow - minRow);
    const left = (to - card.to) * YEAR_LENGTH;
    const bottom = (card.row - minRow) * rowHeight + '%';
    const cardWidth = DEFAULT_CARD_WIDTH;
    const rangeWidth = (card.to - card.from) * YEAR_LENGTH;
    const height = CARD_HEIGHT_IN_ROWS * rowHeight + '%';

    return (
        <div
            id={entry.name}
            className={
                'Card'
                + (isSelected ? ' Card--selected' : '' )
            }
            style={
                { left: left
                , bottom
                , width: rangeWidth
                , height
                }
            }
            title={ entry.title}
        >
            <Link
                to={SUBPAGE_URL}
                className="Card__Range"
                style={ { width: rangeWidth } }></Link>

            <Link className="Card__Entry"
                to={SUBPAGE_URL}
                style={ { width: cardWidth } }
            >
                <img
                    className="Card__image"
                    alt={entry.name + ' representation'}
                    loading="lazy"
                    src={imageUrl}
                    srcSet={srcSet}
                />
                <div className={'Card__Summary'}>
                    <div className="Card__Head">
                        <h3 className="Card__Title">{entry.title}</h3>
                        <p className="Card__sub-title">{entry.subtitle}</p>
                    </div>

                    {
                        entry.short &&
                        <div className="Card__DescriptionWrapper">
                            <p className="Card__Description">{entry.short}</p>
                        </div>
                    }
                </div>
            </Link>
        </div>
    );
}