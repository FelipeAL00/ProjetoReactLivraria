import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import img1 from "../../assets/img/lib.jpg";
import img2 from "../../assets/img/lib.jpg";
import img3 from "../../assets/img/lib.jpg";
import img4 from "../../assets/img/lib.jpg";
import { Carrossel } from './style.js';

class DemoCarousel extends Component {
    render() {
        return (
            <Carrossel>
                <Carousel>
                    <div>
                        <img src={img1} />
                        <p className="legend">Viagem ao centro da terra</p>
                    </div>
                    <div>
                        <img src={img2} />
                        <p className="legend">Viagem ao centro da terra</p>
                    </div>
                    <div>
                        <img src={img3} />
                        <p className="legend">Viagem ao centro da terra</p>
                    </div>
                    <div>
                        <img src={img4} />
                        <p className="legend">Legend 3</p>
                    </div>
                </Carousel>
            </Carrossel>
        );
    }
};



export default DemoCarousel;