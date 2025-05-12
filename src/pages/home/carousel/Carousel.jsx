import Carousel from "react-bootstrap/Carousel";
import CarouselImage from "../../../components/common/carouselImg/CarouselImg";

import bgImg1 from "../../../assets/images/carusel-bg-1.jpg";
import bgImg2 from "../../../assets/images/carusel-bg-2.jpg";

function CarouselImg() {
    return (
        <Carousel fade>
            <Carousel.Item className="">
                <CarouselImage
                    img={bgImg1}
                    styleImg="w-full h-[500px] object-cover object-center md:h-[850px]"
                    alt="2couple"
                />
            </Carousel.Item>
            <Carousel.Item>
                <CarouselImage
                    img={bgImg2}
                    styleImg="w-full h-[500px] object-cover object-center md:h-[850px]"
                    alt="nature-japan"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselImg;
