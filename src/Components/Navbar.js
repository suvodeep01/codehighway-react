import React from "react";
import Slider from "react-slick";
import $ from "jquery";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 15,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="top-header">
            <div className="container-fluid">
                <div className="top_hed">
                    <Slider {...settings}>

                        <div><a href="#">C</a></div>
                        <div><a href="#">Html</a></div>
                        <div><a href="#">Css</a></div>
                        <div><a href="#">JavaScript</a></div>
                        <div><a href="#">Php</a></div>
                        <div><a href="#">Python</a></div>
                        <div><a href="#">C#</a></div>
                        <div><a href="#">Boostrap</a></div>
                        <div><a href="#">Jquery</a></div>
                        <div><a href="#">Asp.Net</a></div>
                        <div><a href="#">Kotlin</a></div>
                        <div><a href="#">Ajax</a></div>

                        <div><a href="#">Java</a></div>

                        <div><a href="#">Photoshop</a></div>
                        <div><a href="#">React</a></div>
                        <div><a href="#">Go</a></div>
                        <div><a href="#">Laravel</a></div>
                        <div><a href="#">Node.js</a></div>
                        <div><a href="#">VB.Net</a></div>

                    </Slider>
                </div>
            </div>
        </div>
    );
}