import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class Slider extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src="/images/banner0.jpeg" />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
            </Carousel>
        );
    }
};

// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));

export default Slider

// Don't forget to include the css in your page