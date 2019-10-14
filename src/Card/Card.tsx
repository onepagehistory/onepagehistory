import { Link } from "react-router-dom";
import React from 'react';
import { IHistoryEvent } from "../data/HistoryEvent";
import { Rectangle, ISizes } from '../shared/types';
import './Card.scss';
import { IChartCard } from "../data/plot-chart";
import { useSiteData } from "react-static";
import { YEAR_LENGTH, DEFAULT_DESCRIPTION_WIDTH } from '../shared/const.js'

interface IProps {
    entry: IHistoryEvent;
    isSelected: boolean;
    card: IChartCard;
    rowMin: number;
    rowMax: number;
}

export const Card = (props: IProps) => {
    const { entry, isSelected, card, rowMin, rowMax  } = props;
    const SUBPAGE_URL = '/p/' + entry.name + '/'; // trailing / is a canonical url

    // NOTE: 4 is a magic from plotter, refactor
    const CARD_HEIGHT_IN_ROWS = 4;

    // NOTE: file-loader is used here exclusively to force loader to use file
    // urls instead of base64 data.
    let localImageSrc1x = require(`!file-loader?{ outputPath: 'static' }!./../data/entries/img/${entry.name}@1x.png`);
    let localImageSrc2x = require(`!file-loader?{ outputPath: 'static' }!./../data/entries/img/${entry.name}@2x.png`);
    let localImageSrc3x = require(`!file-loader?{ outputPath: 'static' }!./../data/entries/img/${entry.name}@3x.png`);

    const { data } = useSiteData();
    const { to } = data;
    const rowHeight = 100 / (rowMax - rowMin);
    let left = (to - card.to) * YEAR_LENGTH;
    let bottom = (card.row - rowMin) * rowHeight + '%';
    let width = (card.to - card.from) * YEAR_LENGTH;
    let height = CARD_HEIGHT_IN_ROWS * rowHeight + '%';

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
                , width
                , minWidth: '340px'
                , height
                }
            }
            title={ entry.title}
        >
            <Link
                to={SUBPAGE_URL}
                className="Card__Range"
                style={ { width } }></Link>

            <div className="Card__Entry">
                <Link
                    to={SUBPAGE_URL}
                    className="Card__ImgWrapper"
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
                                width: DEFAULT_DESCRIPTION_WIDTH
                            }}
                        >{entry.short}</p>
                    }
                </div>
            </div>
        </div>
    );
}