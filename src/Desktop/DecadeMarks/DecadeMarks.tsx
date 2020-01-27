import React from 'react';

export const DecadeMarks = (props) => {
    const { decades } = props;

    return <div className="timeline__decades">{
        decades.map((entry, index) =>
            <div
                key={index}
                className="timeline__decades-item"
            >
                <p>
                    {entry}
                </p>
            </div>
        )
    }</div>
}
