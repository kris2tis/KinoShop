import { React} from "react";
import { Container } from "react-bootstrap";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import BlogPost from "./blogpost/BlogPost";
import { useBlogs } from "../../../hooks/useApi";

function Blog() {
    let { data } = useBlogs();

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
            <div className="slider-container">
                <Slider {...settings}>
                    {data?.map((item) => (
                            <div>
                                <BlogPost {...item} />
                            </div>
                        ))}
                </Slider>
            </div>
        </Container>
    );
}

export default Blog;
