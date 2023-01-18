import React from 'react'
import "./intro.css"
import Me from "../../images/me.jpg"

function Intro() {     
    return (
        <div className="i">
                <div className="i-left">
                    <div className="i-left-wrapper">
                        <h2 className='i-about'>About The Creator of</h2>
                        <h1 className='typed'>WOEVEN AFREEKUH</h1>
                        <h2 className='typed'>-----------------</h2>
                        <h1 className='i-name'>Vhudi Motabatsindi</h1>
                        <div className='i-title'>
                            <div className="i-title-wrapper">
                                <div className="i-title-item">Photographer</div>
                                <div className="i-title-item">Model</div>
                                <div className="i-title-item">Graphic Designer</div>
                                <div className="i-title-item">Videographer</div>
                            </div>
                        </div>
                        <p className="i-desc">
                            I am a professional entrepreneur in the creative space dedicated
                            creating a platform for the exchange of ideas.
                        </p>
                    </div>
                </div>
                <div className="i-right">
                    <img src={Me} alt='' className='i-img' />
                </div>
        </div>
    );
    }

export default Intro;

