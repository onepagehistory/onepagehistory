import React from 'react';

export function ExternalLink(props) {
    return <a {...props} target="_blank" rel="noopener noreferrer">{props.children || props.href}</a>;
}