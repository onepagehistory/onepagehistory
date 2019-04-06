import React, { Component } from 'react';
import './App.css';
import { Card } from './Card/Card';
import { Search } from './Search/Search';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App__Header">
            <Search />
        </header>
        <section className="App__Body">
            { (new Array(100).fill(undefined)).map((_, v)=>(
                <Card
                    key={v}
                />
            ))
            }
        </section>
      </div>
    );
  }
}

export default App;
