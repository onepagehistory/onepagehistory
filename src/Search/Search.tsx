import React, { Component } from 'react';
import './Search.css';

export class Search extends Component {
  render() {
    return (
        <div className="Search">
            <input
                className="Search__Input"
                placeholder="Search"
                />
        </div>
    );
  }
}