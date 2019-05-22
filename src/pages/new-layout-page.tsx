import React from 'react'
import './newLayout.css'

function Card(props) {
    return (
    <div className="Default" style={{position:'absolute', top: props.y, left: props.x}}>
        card
    </div>
    )
}

function BackGround(){
    return (
        <div className="Decade-wrap">
            {(new Array(40)).fill(0).map(
                function () {
                    return (
                        <div className="Decade"></div>
                    )
                }
            )}
        </div>
    )
}

function TimeLine(){
    return (
        <div className="TimeLine">
            {(new Array(40)).fill(0).map(
                function (_, index) {
                    return (
                        <div className="TimeLine__item">
                            {2000 - index*10}
                        </div>
                    )
                }
            )}
        </div>
    )
}


export default () => (
    <div className="Layout">
        <Card x={20} y={40}></Card>
        <Card x={10} y={30}></Card>
        <BackGround></BackGround>
        <TimeLine></TimeLine>
    </div>
)
