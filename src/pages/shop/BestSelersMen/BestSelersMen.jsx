import Slider from "react-slick";
import CarouselItem from "../../../components/CarouselItem/CarouselItem";
import Button from "../../../components/button/Button";

import { Link } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./BestSelersMen.css";
import { useProductsSoftFabrics } from "../../../hooks/useApi";
const style = {
    border_clr: "#c4c4c6",
};

const btnStyle = {...style , text : "دیدن موارد بیشتر"}

export default function BestSelersMen() {
    let {data} = useProductsSoftFabrics()

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
        <div className="best__selers-men mt-10">
            <div className="!border-b-[1px] border-[#c4c4c6] mb-4">
                <h3 className="text-center">بیشترین فروش</h3>
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
            <div className="flex justify-center mt-15">
                <Link to="/products">
                    <Button {...btnStyle} />
                </Link>
            </div>
        </div>
    );
}
