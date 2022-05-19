import React from 'react'
import "./intro.css"
import Me from "../../images/me.jpg"

function Intro() {
    return (
    <div><header class="d-flex justify-content-center py-3 sticky-top navbar-expand-lg navbar-light bg-light bgcolor">
            <ul class="nav nav-pills">
                <li class="nav-item"><a href="#" class="nav-link active text-dark" aria-current="page bg-light">HOME</a></li>
                <li class="nav-item"><a href="#" class="nav-link text-dark">WOEVEN AFREEKUH </a></li>
                <li class="nav-item"><a href="#" class="nav-link text-dark">PHOTOGRAPHY</a></li>
                <li class="nav-item"><a href="#" class="nav-link text-dark">SERVICES</a></li>
            </ul>
        </header><div className="i">
                <div className="i-left">
                    <div className="i-left-wrapper">
                        <h2 className='i-intro'>Hello, My name is </h2>
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
            </div>);
    }

export default Intro;

