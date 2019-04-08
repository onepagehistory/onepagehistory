import React, { Component } from 'react';
import { Card } from './Card/Card';
import { Search } from './Search/Search';
import { data } from './data';
import './App.scss';

class App extends Component<any, any> {
  render() {
    return (
      <div className="App">
        <header className="App__Header">
            <Search />
        </header>
        <section className="App__Body">{
            data.entries.filter(entry=>entry.name).map(entry=>(
                <div
                    key={entry.name}
                    style={{ position: 'absolute', ...entry.position, }}
                ><Card
                    entry={entry}
                /></div>
            ))
        }</section>
      </div>
    );
  }
}

export default App;
