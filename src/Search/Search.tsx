import React, { Component } from 'react';
import injectSheet from 'react-jss';

const styles = (theme:any)=>({
    Input: {
        width: '30rem',
        borderRadius: '2px',
        fontSize: '1.25rem',
        lineHeight: '2rem',
        verticalAlign: 'middle',
        background: '#f8f8f8',
        border: '2px solid #f8f8f8',
        padding: '0 1rem',

        '&:focus': {
            outline: 'none',
            boxShadow: '0 0 0.25rem rgba(0, 0, 0, 0.25)',
            background: 'white',
            borderColor: 'white'
        }
    }
})

class Search extends Component<any> {
  render() {
    return (
        <div>
            <input
                className={this.props.classes.Input}
                placeholder="Search"
                />
        </div>
    );
  }
}

export default injectSheet(styles)(Search);