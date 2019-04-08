import React, { Component } from 'react';
import { Card } from './Card/Card';
import { Search } from './Search/Search';
import { data } from './data';
import { Scales } from './Scales/Scales';
import './App.scss';

class App extends Component<any, any> {
  render() {
    return (
      <div className="App">
        <header className="App__Header">
            <Search />
        </header>
        <section className="App__Body">
            <div className="App__Events">{
                data.entries.filter(entry=>entry.name).map(entry=>
                    <Card
                        key={entry.name}
                        entry={entry}
                    />
                )
            }</div>
            <div className="App__Scales">
                <Scales from={1000} to={2019}/>
            </div>
        </section>
      </div>
    );
  }
}

export default App;
