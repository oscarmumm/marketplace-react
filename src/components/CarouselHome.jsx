import React from "react";
import blackfriday_banner from '../assets/img/banners/blackfriday_banner.png'
import tools_banner from '../assets/img/banners/tools_banner.png'
import running_banner from '../assets/img/banners/running_banner.png'

const CarouselHome = () => {
    return (
        <div
            id="carouselExampleAutoplaying"
            className="carousel slide col-md-8"
            data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={blackfriday_banner} className="d-block w-100" alt="blackfriday_banner" />
                </div>
                <div className="carousel-item">
                    <img src={tools_banner} className="d-block w-100" alt="tools_banner" />
                </div>
                <div className="carousel-item">
                    <img src={running_banner} className="d-block w-100" alt="running_banner" />
                </div>
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev">
                <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next">
                <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default CarouselHome;
