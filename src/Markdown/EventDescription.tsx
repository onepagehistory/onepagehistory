import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';


export class EventDescription extends Component<{value: string}> {
    render() {
        return (
            <ReactMarkdown source={this.props.value} />
            )
    };
}

