import React from 'react'
import "./intro.css"
import engineer from '../../img/eng2.png'



const Intro = () => {
    return(
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, My name is</h2>
                    <h1 className="i-name">Allan Mich</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Structural Surveyor</div>
                            <div className="i-title-item">Site Supervisor</div>
                            <div className="i-title-item">Contractor</div>
                            <div className="i-title-item">Construction Manager</div>
                            <div className="i-title-item">Road Engineer</div>
                        </div>
                    </div>
                    <div className="i-desc">
                        lorem ipsum dnodns fvnsvnv vrnv vrnbir rinbr brib rirb brbb rbr
                        bb irnbirnbrnbor brinbr brbr brob irbirb rbrb ribr br
                    </div>
                </div>
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={engineer} alt="" className="i-image"/>
            </div>
        </div>
    )
};

export default Intro;