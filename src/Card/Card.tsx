import React, { Component } from 'react';
import './Card.css';

export class Card extends Component {
  render() {
    return (
        <div className="Card">
            <h3>Event name</h3>
            <div>years 1000</div>
            <div>Event description</div>
        </div>
    );
  }
}