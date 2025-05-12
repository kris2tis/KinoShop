import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from '../../../components/common/carouselImg/CarouselImg';

import bgImg1 from "../../../assets/images/achieved/achieved-bg-1.jpg";
import bgImg2 from "../../../assets/images/achieved/achieved-bg-2.jpg";
import bgImg3 from "../../../assets/images/achieved/achieved-bg-3.jpg";
import { Container , Row } from 'react-bootstrap';
function Achieved() {
    return (
        <Container className="mt-20">
            <Row>
                <Carousel fade>
                    <Carousel.Item className="">
                        <CarouselImage
                            img={bgImg1}
                            
                            styleImg="w-full h-[300px]  object-center md:h-[850px]"
                            alt="2couple"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <CarouselImage
                            img={bgImg2}
                            styleImg="w-full h-[300px] object-cover object-center md:h-[850px]"
                            alt="nature-japan"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <CarouselImage
                            img={bgImg3}
                            styleImg="w-full h-[300px] object-cover object-center md:h-[850px]"
                            alt="nature-japan"
                        />
                    </Carousel.Item>
                </Carousel>
            </Row>
        </Container>
    );
}

export default Achieved;