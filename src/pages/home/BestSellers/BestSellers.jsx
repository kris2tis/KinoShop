import { React } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Container } from "react-bootstrap";

import CarouselItem from "../../../components/CarouselItem/CarouselItem";
import { useProductsSoftFabrics } from "../../../hooks/useApi";

export default function BestSellers() {
    let { data } = useProductsSoftFabrics();

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        rtl: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (
        <Container className="hide-slick-buttons-rtl mt-20">
            <div className="!border-b-[1px] border-[#c4c4c6] mb-4">
                <h3>محبوب ترین ها</h3>
            </div>
            <div className="slider-container">
                <Slider {...settings}>
                    {data?.map((item) => (
                        <div>
                            <CarouselItem {...item} />
                        </div>
                    ))}
                </Slider>
            </div>
        </Container>
    );
}
