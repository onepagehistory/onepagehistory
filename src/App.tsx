import React, { Component } from 'react';
import Card from './Card/Card';
import Search from './Search/Search';
import injectSheet from 'react-jss';
import { data } from './data';

const styles = (theme:any) => ({
    App: {
        textAlign: 'center',
        padding: '0.5rem',
    },
    Header: {
        marginTop: '1rem'
    },
    Body: {
        position: 'relative'
    }
});

class App extends Component<any> {
  render() {
    return (
      <div className={this.props.classes.App}>
        <header className={this.props.classes.Header}>
            <Search />
        </header>
        <section className={this.props.classes.Body}>
            { data.entries.filter(entry=>entry.name).map(entry=>(
                <div
                    key={entry.name}
                    style={{ position: 'absolute', ...entry.position, }}
                ><Card
                    entry={entry}
                /></div>
            ))
            }
        </section>
      </div>
    );
  }
}

export default injectSheet(styles)(App);
