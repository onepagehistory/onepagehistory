import * as React from 'react';
import './Minimap.scss';

const data =
    [ { from: 0, to: 1, y: 1 }
    , { from: 0, to: 1, y: 1 }
    ]

export class Minimap extends React.Component<any, any> {
  render(){
      return (
        <div className="minimap">
            minimap
        </div>
      )
  }
}