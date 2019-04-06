import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { HistoryEntry } from '../data';

const styles = (theme:any) => ({
    Card: {
        maxWidth: '20rem',
        display: 'flex',
        flexDirection: 'row-reverse',
        background: 'white',
        borderRadius: '0.25rem',
        overflow: 'hidden',
        boxShadow: '0 0 2px rgba(0, 0, 0, 0.2)',
        margin: '1rem',
        textAlign: 'left',
        maxHeight: '128px',
        '&:hover': {
            zIndex: '999',
            maxHeight: '',
        }
    },
    Body: {
        paddingLeft: '1rem'
    },
    Title: {
        color: '#222',
        margin: '0.25rem 0 0',
        '& a, a:visited': {
            color: '#222',
            textDecoration: 'none'
        }
    },
    Date: {
        fontSize: '0.6rem',
        color: '#666'
    },
    ShortDescription: {
        paddingTop: '0.5rem',
        fontSize: '0.8rem',
        color: '#333',
    },
    ImgWrapper: {
        width: '128px',
        height: '128px',

        '& img': {
            maxWidth: '128px',
            maxHeight: '128px'
        }
    }
});

const Card = ({ classes, entry }: { classes:any, entry: HistoryEntry }) => (
    <div id={entry.name } className={classes.Card}>
        <div className={classes.Body}>
            <h3 className={classes.Title}><a href={'#' + entry.name }>{entry.title}</a></h3>
            <div className={classes.Date}>{entry.date}</div>
            <div className={classes.ShortDescription}>{entry.shortDescription}</div>
        </div>
        <div
            className={classes.ImgWrapper}
        ><img src={entry.imageUrl} /></div>
    </div>
);

export default injectSheet(styles)(Card);
