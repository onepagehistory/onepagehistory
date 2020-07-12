import { Link } from "react-router-dom";
import React from 'react';
import { IHistoryEvent } from "../data/HistoryEvent";
import { IChartCard } from "../data/plot-chart";
import { useSiteData } from "react-static";
import { YEAR_LENGTH, DEFAULT_CARD_WIDTH } from '../shared/const.js'
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

    // NOTE: 4 is a magic from plotter, refactor
    const CARD_HEIGHT_IN_ROWS = 16;

    // NOTE: file-loader is used here exclusively to force loader to use file
    // urls instead of base64 data.
    let localImageSrc1x = require(`!file-loader?{ outputPath: 'static' }!./../data/entries/img/${entry.name}@1x.png`);
    let localImageSrc2x = require(`!file-loader?{ outputPath: 'static' }!./../data/entries/img/${entry.name}@2x.png`);
    let localImageSrc3x = require(`!file-loader?{ outputPath: 'static' }!./../data/entries/img/${entry.name}@3x.png`);

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
                    src={localImageSrc1x || entry.imageUrl}
                    srcSet={`${localImageSrc1x} 1x, ${localImageSrc2x} 2x, ${localImageSrc3x} 3x,`}
                />
                <div className={'Card__Summary'}>
                    <div className="Card__Head">
                        <h3 className="Card__Title">{entry.title}</h3>
                        <p className="Card__sub-title">{entry.subtitle}</p>
                    </div>

                    {
                        entry.short &&
                        <p className="Card__Description">{entry.short}</p>
                    }
                </div>
            </Link>
        </div>
    );
}