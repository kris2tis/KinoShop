import { Container , Row , Col } from "react-bootstrap"

import women_cat from "../../../assets/images/womenbg-category.jpg";
import men_cat from "../../../assets/images/menbg-category.jpg";

function Arrivals() {
    return (
        <Container className="mt-20">
            <Row>
                <Col>
                    <h3 className="title__Arrivals">محصولات جدید</h3>
                </Col>
            </Row>
            <Row className="flex gap-y-2">
                <Col className="relative" sm={12} md={6}>
                    <img src={men_cat} alt="men_cat" />
                    <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold md:left-1/6">
                        مردان
                    </p>
                </Col>
                <Col className="relative" sm={12} md={6}>
                    <img src={women_cat} alt="women_cat" />
                    <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold md:left-1/6">
                        زنان
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default Arrivals