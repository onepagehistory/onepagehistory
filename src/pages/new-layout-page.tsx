import React from 'react'
import './newLayout.css'

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


export const NewLayout = () => {
    return (<div>
        <BackGround></BackGround>
    </div>)
}

