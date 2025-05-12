import Slider from "react-slick";
import ExplorMensWearItem from "./ExplorMensWearItem/ExplorMensWearItem/ExplorMensWearItem";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./ExplorMensWear.css";

import { useProductsSoftFabrics } from "../../../hooks/useApi";
export default function ExplorMensWear() {
    let { data } = useProductsSoftFabrics();

    var settings = {
        dots: false,
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
        <div className="explor__mens-wear mt-20">
            <div className="!border-b-[1px] border-[#c4c4c6] mb-10">
                <h3 className="text-center mb-5">پوشاک مردان</h3>
            </div>
            <div className="slider-container">
                <Slider {...settings}>
                    {data?.map((item) => (
                        <div>
                            <ExplorMensWearItem {...item} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}
