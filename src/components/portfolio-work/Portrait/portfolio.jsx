import "./portfolio.css";
import port1 from "../../../images/Portfolio/portraits/port-1.jpg"
import port2 from "../../../images/Portfolio/portraits/port-2.jpg"
import port3 from "../../../images/Portfolio/portraits/port-3.jpg"
import port4 from "../../../images/Portfolio/portraits/port-4.jpg"
import port5 from "../../../images/Portfolio/portraits/port-5.jpg"
import port6 from "../../../images/Portfolio/portraits/port-6.jpg"
import port7 from "../../../images/Portfolio/portraits/port-7.jpg"
import port8 from "../../../images/Portfolio/portraits/port-8.jpg"
import port9 from "../../../images/Portfolio/portraits/port-9.jpg"
import port10 from "../../../images/Portfolio/portraits/port-10.jpg"
import port12 from "../../../images/Portfolio/portraits/port-12.jpg"
const Portfolio = () => {
    console.log(window.location)
return (
        <div class="e text-dark mb-3">
            <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                <div class="text-center">
                    <h1 className="p-title">PORTFOLIO OF WORK</h1>
                            <div class="row">
                                <div class="col-lg-4 col-md-12 mb-3 mb-lg-0">
                                    <img
                                    src={port2}
                                    class="w-100 shadow-1-strong "
                                    alt="Boat on Calm Water"
                                    />

                                    <img
                                    src={port10}
                                    class="w-100 shadow-1-strong "
                                    alt="Wintry Mountain Landscape"
                                    />
                                </div>

                                <div class="col-lg-4 mb-3 mb-lg-0">
                                    <img
                                    src={port5}
                                    class="w-100 shadow-1-strong "
                                    alt="Mountains in the Clouds"
                                    />

                                    <img
                                    src={port6}
                                    class="w-100 shadow-1-strong "
                                    alt="Boat on Calm Water"
                                    />
                                </div>

                                <div class="col-lg-4 mb-3 mb-lg-0">
                                    <img
                                    src={port9}
                                    class="w-100 shadow-1-strong "
                                    alt="Waves at Sea"
                                    />

                                    <img
                                    src={port10}
                                    class="w-100 shadow-1-strong "
                                    alt="Yosemite National Park"
                                    />
                                </div>
                            </div>
                            <div class="row">
                            <div class="column col-lg-4">
                                <img src={port12}/>
                                <img src={port2}/>
                                <img src={port3}/>
                                <img src={port4}/>
                                <img src={port5}/>
                                <img src={port6}/>
                                <img src={port7}/>
                            </div>
                            <div class="column">
                            <img src={port1}/>
                            <img src={port12}/>
                            <img src={port3}/>
                            <img src={port4}/>
                            <img src={port5}/>
                            <img src={port12}/>
                            <img src={port7}/>
                            </div>
                            <div class="column">
                                <img src={port1}/>
                                <img src={port2}/>
                                <img src={port3}/>
                                <img src={port4}/>
                                <img src={port5}/>
                                <img src={port6}/>
                                <img src={port7}/>
                            </div>
                            <div class="column">
                            <img src={port1}/>
                            <img src={port2}/>
                            <img src={port3}/>
                            <img src={port4}/>
                            <img src={port5}/>
                            <img src={port6}/>
                            <img src={port7}/>
                            </div>
                </div>
            </div>
            </div>
        </div>
    );
    };

    export default Portfolio;