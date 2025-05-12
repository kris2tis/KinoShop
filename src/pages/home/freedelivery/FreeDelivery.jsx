import { Row, Col, Container } from "react-bootstrap";
import "./FreeDelivery.css";
function FreeDelivery() {
    return (
        <div className="bg-[#F4EEDE]">
            <Container className="py-5">
                <Row className="flex flex-col gap-y-7 md:flex-row items-center">
                    <Col sm={12} md={4} className="flex justify-center items-center flex-col">
                        <h3 style={{ fontWeight: "bold" }}>Limited Offer</h3>
                        <span style={{ fontSize: "80%", fontStyle: "italic" }}>
                            until 14th April
                        </span>
                    </Col>
                    <Col sm={12} md={4} className="d-flex flex-col">
                        <h3 style={{ fontWeight: "bold" }}>FREE DELIVERY</h3>

                        <span style={{ fontSize: "80%", fontStyle: "italic" }}>
                            for purchases over £65*
                        </span>
                    </Col>
                    <Col sm={12} md={4} className="d-flex flex-col">
                        <span style={{ fontSize: "80%", fontStyle: "italic" }}>
                            *Excludes furniture & large polypropylene storage.
                            Discount automatically applied at checkout
                        </span>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default FreeDelivery;
