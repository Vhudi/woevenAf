import "./events.css";
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
const EventsPortfolio = () => {
    console.log(window.location)

return (
        <div class="e text-dark mb-3">
                <div class="text-center">
                    <h1 className="e-title">Events</h1>
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
    );
    };

    export default EventsPortfolio;