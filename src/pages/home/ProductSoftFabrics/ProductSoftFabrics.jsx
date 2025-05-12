import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import bgImg from "../../../assets/images/bg-productsoftfabrics.jpg";
import CarouselItem from "../../../components/CarouselItem/CarouselItem"

import { useProducts } from "../../../hooks/useApi";

export default function ProductSoftFabrics() {
    let { data } = useProducts();

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        rtl: true,
        responsive: [
            {
                breakpoint: 1200, 
                settings: {
                    slidesToShow: 3,
                },
            },

            {
                breakpoint: 992, // کوچکتر از 992 → 2 اسلاید
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 576, // کوچکتر از 768 → 1 اسلاید
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (
        <Container className="hide-slick-buttons-rtl mt-20">
            <Row className="align-items-center">
                <Col className="flex justify-center">
                    <img src={bgImg} alt="backgroundSofFabrics" />
                </Col>
                <Col className="!-mt-30 lg:!-mt-80">
                    <Slider {...settings}>
                        {data?.map((item) => (
                                <div>
                                    <CarouselItem {...item} />
                                </div>
                            ))}
                    </Slider>
                </Col>
            </Row>
        </Container>
    );
}
