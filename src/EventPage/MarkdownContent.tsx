import React from 'react';
import ReactMarkdown from "react-markdown";
import { ExternalLink } from '../shared/ExternalLink';
import { Link } from 'react-router-dom';

function testIfUriIsLocal(uri) { return /^\/[^\/]/.test(uri); }

function linkRenderer({ href, children }) {
    return testIfUriIsLocal(href)
    ? <Link to={href} children={children} />
    : <ExternalLink href={href} children={children} />
}

export function MarkdownContent(props: { content: string }){
    return <ReactMarkdown source={props.content} renderers={{
        link: linkRenderer
    }}/>
}