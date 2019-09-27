import React from 'react';

export const DecadeMarks = (props) => {
    const { decades } = props;

    return <div className="timeline__decades">{
        decades.map(entry =>
            <div
                key={entry.name}
                className="timeline-decades__item"
            >
                <p>
                    {entry.name}
                </p>
            </div>
        )
    }</div>
}
